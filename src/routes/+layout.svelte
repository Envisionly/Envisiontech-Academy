<script lang="ts">
	import '$styles/global.css';
	import '@awesome.me/kit-42303f35a0/icons/css/all.min.css';
	import { page } from '$app/stores';
	import Navbar from '$components/Navbar.svelte';

	const { children } = $props();
</script>

<section
	class="fixed flex h-full w-[20%] flex-col divide-y divide-gray-300 overflow-y-auto bg-gray-100 p-3.5"
>
	<header class="flex flex-grow flex-col">
		<img class="mx-auto w-full object-contain" src="/logo.png" alt="Envision Tech Academy Logo" />
		<Navbar />
	</header>
	<footer class="flex pt-2">
		<div class="mx-auto">
			<h2 class="text-center font-medium text-gray-900">Get Involved</h2>
			<p class="text-center text-sm text-gray-700">Do you have a question about this page?</p>
			<p class="text-center text-sm text-gray-700">Would you like to suggest an improvement?</p>
			<p class="text-center text-sm text-gray-700">
				Please <a href="mailto:contact@envisionly.tech">email us</a>
				or go to our
				<a
					href={'https://github.com/Envisionly/Envisionly-Tech-Academy/tree/main/src/routes' +
						$page.url.pathname +
						'/+page.svelte'}>GitHub</a
				>
			</p>
			<div class="mx-auto my-2 h-px w-[90%] bg-gray-300"></div>
			<h2 class="text-center font-medium text-gray-900">Find Us</h2>
			<div class="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
				<ul class="flex justify-center gap-6 text-sm text-gray-700 sm:justify-start md:gap-8">
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
			<div class="mx-auto my-2 h-px w-[90%] bg-gray-300"></div>
			<p class="mt-2 text-center text-xs text-gray-500">
				Copyright © Envisionly limited {new Date().getFullYear() != 2024
					? '2024 - ' + new Date().getFullYear()
					: new Date().getFullYear()}.
			</p>
			<p class="mt-2 text-center text-xs text-gray-500">All rights reserved.</p>
		</div>
	</footer>
</section>

<main class="ml-[20%] overflow-y-auto">
	{@render children()}
</main>
