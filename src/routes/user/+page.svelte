<script lang="ts">
	import { enhance } from '$app/forms';

	const { data } = $props();
</script>

<svelte:head>
	<title>User profile</title>
</svelte:head>

<h1>User profile</h1>
<p>Welcome, {data.user?.username}!</p>
<p>Member since: {new Date(data.user?.createdAt).toDateString()}</p>

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
