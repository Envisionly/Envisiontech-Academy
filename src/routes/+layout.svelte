<script lang="ts">
	import '$styles/global.css';
	import '@awesome.me/kit-42303f35a0/icons/css/all.min.css';
	import Navbar from '$components/Navbar.svelte';
</script>

<header class="flex bg-gray-100 py-3.5 px-3.5">
	<img
		class="w-[45%]"
		src="EnvisionlyTechAcademyLogo-transparent.png"
		alt="Envisionly Tech Academy Logo"
	/>
	<Navbar />
</header>
<main class="flex-grow">
	<slot></slot>
</main>
<footer class="flex bg-gray-100 py-3.5 px-3.5">
	<div class="mx-auto max-w-screen-xl">
		<h2 class="text-center">Find Us</h2>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<ul class="flex justify-center gap-6 sm:justify-start md:gap-8">
				<li><a href="/"><span aria-label="Email" class="fa-light fa-envelope"></span></a></li>
				<li><a href="/"><span aria-label="Phone" class="fa-light fa-phone"></span></a></li>
				<li><a href="/"><span aria-label="YouTube" class="fa-brands fa-youtube"></span></a></li>
				<li><a href="/"><span aria-label="GitHub" class="fa-brands fa-github"></span></a></li>
				<li><a href="/"><span aria-label="LinkedIn" class="fa-brands fa-linkedin"></span></a></li>
			</ul>
		</div>
		<p class="mt-2 text-center text-sm text-gray-500">
			Copyright © Envisionly limited {new Date().getFullYear() != '2024'
				? '2024 - ' + new Date().getFullYear()
				: new Date().getFullYear()}. All rights reserved.
		</p>
	</div>
</footer>
