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
	<h2>Linked Accounts</h2>
	<ul>
		{#if data.user.github_id}
			<li><span class="fa-brands fa-github" aria-label="GitHub"></span></li>
		{/if}
	</ul>
{:else}
	<p>Something went wrong while trying to load your profile!</p>
{/if}

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
