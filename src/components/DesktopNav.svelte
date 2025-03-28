<script lang="ts">
	import { page } from '$app/stores';
	import { navItems } from '$utils/NavManager';
</script>

<nav aria-label="Global" class="m-auto w-full">
	<ul class="space-y-7 text-center">
		{#each navItems as item}
			<li>
				{#if item.type == 'link' && item.href}
					<a
					class="flex items-center justify-between gap-2 border-b border-envisionlyLightBlue pb-1 text-lg 
					uppercase text-envisionlyLightBlue hover:border-envisionlyGold hover:text-envisionlyGold focus:border-envisionlyGold focus:text-envisionlyGold
					active:border-envisionlyTransparentGold active:text-envisionlyTransparentGold aria-current:border-b-2 aria-current:font-bold 
					contrast-more:border-envisionlyDarkBlue contrast-more:text-envisionlyDarkBlue"						
						aria-current={$page.url.pathname === '/' && item.href === '/'
							? 'page'
							: $page.url.pathname !== '/' &&
								  $page.url.pathname.startsWith(item.href) &&
								  item.href !== '/'
								? 'page'
								: undefined}
						href={item.href}
					>
						{#if item.text}
							<span>{item.text}</span>
						{/if}
						{#if item.icon}
							<span
								class="{$page.url.pathname === '/' && item.href === '/'
									? 'fa-regular'
									: $page.url.pathname !== '/' &&
										  $page.url.pathname.startsWith(item.href) &&
										  item.href !== '/'
										? 'fa-regular'
										: 'fa-light'} {item.icon}"
							>
							</span>
						{/if}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
