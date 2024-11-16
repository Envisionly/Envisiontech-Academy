<script lang="ts">
	import '$styles/global.css';
	import '@awesome.me/kit-42303f35a0/icons/css/all.min.css';
	import { page } from '$app/stores';
	import Newsletter from '$components/Newsletter.svelte';
	import DesktopNavbar from '$components/DesktopNav.svelte';
	import MobileNavbar from '$components/MobileNav.svelte';
	import { goto } from '$app/navigation';
	const { children, data } = $props();
</script>

<header
	class="flex h-fit bg-gray-100 p-3.5 sm:fixed sm:h-full sm:w-[20%] sm:flex-col sm:divide-y sm:divide-gray-300 sm:overflow-y-auto"
>
	<section class="flex sm:h-full sm:flex-col">
		<a class="sr-only" href="#main">Skip to main content</a>
		{#if $page.url.pathname.startsWith('/learning')}
			<a class="sr-only" href="#course">Skip to course content</a>
		{/if}
		<img
			class="hidden sm:mx-auto sm:block sm:w-full sm:object-contain"
			data-src="https://envisiontech-academy.gumlet.io/resources/logo-short-nb.png"
			alt="Envision Tech Academy Logo"
		/>
		<img
			class="mx-auto w-[80%] object-contain sm:hidden"
			data-src="https://envisiontech-academy.gumlet.io/resources/logo-long-nb.png"
			alt="Envision Tech Academy Logo"
		/>

		<div class="sm:hidden">
			<MobileNavbar />
		</div>
		<div class="hidden sm:flex">
			{#if data.isLoggedIn}
				<button onclick={() => goto('/login')}>Login</button>
			{:else}
				<button onclick={() => goto('/user')}>User</button>
			{/if}
		</div>

		<div class="my-auto hidden sm:flex">
			<DesktopNavbar />
		</div>
	</section>
	<div aria-hidden="true" class="hidden sm:flex">
		{@render footer('desktop')}
	</div>
</header>

<main id="main" class="sm:ml-auto sm:w-[80%] sm:overflow-y-auto">
	{@render children()}
</main>

{@render footer('mobile')}

{#snippet footer(type: string | 'desktop' | 'mobile')}
	<footer
		class={`flex w-full flex-col divide-y divide-gray-300 text-wrap bg-gray-100 *:py-2 ${type == 'mobile' ? 'sm:sr-only' : ''} `}
		aria-hidden={type == 'desktop' ? 'true' : 'false'}
	>
		<div class="flex flex-col">
			<h4 class="text-center font-medium uppercase">Get Involved</h4>
			<p class="text-center text-sm text-gray-700">Do you have a question about this page?</p>
			<p class="text-center text-sm text-gray-700">Would you like to suggest an improvement?</p>
			<p class="text-center text-sm text-gray-700">
				Please <a
					class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
					href="mailto:contact@envisionly.tech">email us</a
				>
				or go to our
				<a
					class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
					href={'https://github.com/Envisionly/Envisionly-Tech-Academy/tree/main/src/routes' +
						$page.url.pathname +
						'/+page.svelte'}>GitHub</a
				>
			</p>
			<Newsletter />
		</div>
		<div>
			<h4 class="text-center font-medium uppercase">Find Us</h4>

			<ul
				class="mx-auto flex w-[60%] flex-wrap justify-between gap-1 text-sm text-gray-700 sm:w-full"
			>
				<li>
					<a
						class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						href="mailto:academy@envisionly.tech"
						><span aria-label="Email" class="fa-light fa-envelope"></span></a
					>
				</li>
				<li>
					<a
						class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						href="tel:+353838061757"><span aria-label="Phone" class="fa-light fa-phone"></span></a
					>
				</li>
				<li>
					<a
						class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						href="/"><span aria-label="YouTube" class="fa-brands fa-youtube"></span></a
					>
				</li>
				<li>
					<a
						class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						href="/"><span aria-label="GitHub" class="fa-brands fa-github"></span></a
					>
				</li>
				<li>
					<a
						class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						href="/"><span aria-label="LinkedIn" class="fa-brands fa-linkedin"></span></a
					>
				</li>
			</ul>
		</div>
		<div>
			<p class="text-center text-xs text-gray-500">
				Copyright © Envisionly limited {new Date().getFullYear() != 2024
					? '2024 - ' + new Date().getFullYear()
					: new Date().getFullYear()}.
			</p>
			<p class="mt-2 text-center text-xs text-gray-500">All rights reserved.</p>
			{#if $page.url.pathname.startsWith('/learning')}
				<a class="sr-only" href="#course">Skip to course content</a>
			{/if}
			<a class="sr-only" href="#main">Go back to main content</a>
		</div>
	</footer>
{/snippet}
