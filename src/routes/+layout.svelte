<script lang="ts">
	import '$styles/global.css';
	import '@awesome.me/kit-42303f35a0/icons/css/all.min.css';
	import { page } from '$app/stores';
	import Navbar from '$components/Navbar.svelte';
</script>

<header class="flex bg-gray-100 py-3.5 px-3.5">
	<img
		class="w-[45%] object-contain"
		src="/EnvisionlyTechAcademyLogo-transparent.png"
		alt="Envisiontech Academy Logo"
	/>
	<Navbar />
</header>
<main class="flex-grow">
	<slot></slot>
</main>
<footer class="flex bg-gray-100 py-3.5 px-3.5">
	<div class="mx-auto max-w-screen-xl">
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
		<div class="w-[90%] h-px mx-auto my-2 bg-gray-300"></div>
		<h2 class="text-center font-medium text-gray-900">Find Us</h2>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<ul class="flex justify-center gap-6 sm:justify-start md:gap-8 text-sm text-gray-700">
				<li><a href="/"><span aria-label="Email" class="fa-light fa-envelope"></span></a></li>
				<li><a href="/"><span aria-label="Phone" class="fa-light fa-phone"></span></a></li>
				<li><a href="/"><span aria-label="YouTube" class="fa-brands fa-youtube"></span></a></li>
				<li><a href="/"><span aria-label="GitHub" class="fa-brands fa-github"></span></a></li>
				<li><a href="/"><span aria-label="LinkedIn" class="fa-brands fa-linkedin"></span></a></li>
			</ul>
		</div>
		<div class="w-[90%] h-px mx-auto my-2 bg-gray-300"></div>
		<p class="mt-2 text-center text-xs text-gray-500">
			Copyright © Envisionly limited {new Date().getFullYear() != '2024'
				? '2024 - ' + new Date().getFullYear()
				: new Date().getFullYear()}. All rights reserved.
		</p>
	</div>
</footer>
