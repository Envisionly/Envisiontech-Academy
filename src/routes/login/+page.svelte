<script>
	import { goto } from '$app/navigation';
</script>

<h1>Login</h1>
<button on:click={() => goto('/login/github')}>Sign in with GitHub</button>
