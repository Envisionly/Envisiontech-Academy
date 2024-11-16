<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<h1>Sign In</h1>
<button on:click={() => goto('/login/github')}>Sign in with GitHub</button>
