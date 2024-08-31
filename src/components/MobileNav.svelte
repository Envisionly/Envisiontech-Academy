<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { links } from '$utils/NavManager';

	let drawer: any;

	onNavigate(() => {
		drawer.open = false;
	});
</script>

<wa-drawer
	style="--background-color:var(--color-gray-100);--size: 70vw;"
	label="Navigation menu"
	bind:this={drawer}
>
	<div class="flex justify-end">
		<!-- svelte-ignore a11y_autofocus -->
		<button
			class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
			autofocus
			data-drawer="close"
			aria-label="Close"
		>
			<span class="fa-light fa-times"></span>
		</button>
	</div>
	<nav aria-label="Global" class="m-auto w-full pt-8">
		<ul class="space-y-7 text-center">
			{#each links as link}
				<li>
					<a
						class="flex items-center justify-between border-b border-envisionlyLightBlue pb-1 text-lg uppercase text-envisionlyLightBlue hover:border-envisionlyGold hover:text-envisionlyGold focus:border-envisionlyGold focus:text-envisionlyGold active:border-envisionlyTransparentGold active:text-envisionlyTransparentGold aria-current:border-b-2 aria-current:font-bold"
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
</wa-drawer>

<button
	class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
	aria-label="Open Navigation Menu"
	on:click={() => (drawer.open = true)}><span class="fa-light fa-bars"></span></button
>
