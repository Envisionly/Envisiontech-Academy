<script lang="ts">
	import { enhance } from '$app/forms';

	const { data } = $props();
</script>

<svelte:head>
	<title>User profile</title>
</svelte:head>

<h1>User profile</h1>
{#if data.user}
	<p>Welcome, {data.user?.username}!</p>
	<p>Email: {data.user.email}</p>
	<p>Member since: {new Date(data.user?.createdAt).toDateString()}</p>
{:else}
	<p>Something went wrong while trying to load your profile!</p>
{/if}

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
