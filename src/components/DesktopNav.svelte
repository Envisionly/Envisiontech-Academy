<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '$utils/NavManager';
</script>

<nav aria-label="Global" class="m-auto w-full">
	<ul class="space-y-7 text-center">
		{#each links as link}
			<li>
				<a
					class="flex items-center justify-between gap-2 border-b border-envisionlyLightBlue pb-1 text-lg uppercase text-envisionlyLightBlue hover:border-envisionlyGold hover:text-envisionlyGold focus:border-envisionlyGold focus:text-envisionlyGold active:border-envisionlyTransparentGold active:text-envisionlyTransparentGold aria-current:border-b-2 aria-current:font-bold"
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					href={link.href}
				>
					<span>{link.name}</span>
					<span class="{$page.url.pathname == link.href ? 'fa-regular' : 'fa-light'} {link.icon}">
					</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
