<script lang="ts">
	import { enhance } from '$app/forms';

	const { data } = $props();
	let dialog: HTMLDialogElement;

	async function signOut() {
		const response = await fetch('/api/user/sign-out', { method: 'get' });
		if (response.ok) {
			location.href = '/';
		}
	}
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

<h2>Actions</h2>
<button onclick={signOut}>Sign out</button>
<button onclick={() => dialog.showModal}>Delete account</button>

<dialog
	bind:this={dialog}
	aria-labelledby="Delete account"
	aria-describedby="Are you sure you want to delete your account?"
>
	<h2 id="Delete account">Delete account</h2>
	<p id="Are you sure you want to delete your account?">
		Are you sure you want to delete your account?
	</p>
	<form method="post" action="/api/user/delete" use:enhance>
		<button type="submit">Yes, delete my account</button>
		<button type="button" onclick={() => dialog.close()}>No, keep my account</button>
	</form>
</dialog>
