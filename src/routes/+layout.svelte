<script lang="ts">
	import Sidebar from './Sidebar.svelte';
</script>

<header>
	<Sidebar />
	<h1>Envisionly Tech Academy</h1>
</header>
<main>
	<slot></slot>
</main>
<footer>
	<h2>Footer</h2>
</footer>

<style>
	:root {
		--envisionlyBlue: midnightblue;
		--envisionlyGold: #daa520;
	}
</style>
