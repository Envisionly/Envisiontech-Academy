<script lang="ts">
	import { toasts } from '$stores/toasts';

	const { data } = $props();
	let dialog: HTMLDialogElement | null = $state(null);

	async function signOut() {
		const response = await fetch('/api/user/sign-out', { method: 'get' });
		if (response.ok) {
			toasts.add({ type: 'success', message: 'You have been signed out!' });
			location.href = '/';
		} else {
			toasts.add({
				type: 'error',
				message: 'Something went wrong while trying to sign you out!'
			});
		}
	}

	async function deleteAccount() {
		const response = await fetch('/api/user/delete-account', { method: 'delete' });
		if (response.ok) {
			toasts.add({ type: 'success', message: 'Your account has been deleted!' });
			location.href = '/';
		} else {
			toasts.add({
				type: 'error',
				message: 'Something went wrong while trying to delete your account!'
			});
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

	<h2>Actions</h2>
	<button onclick={signOut}>Sign out</button>
	<button
		onclick={() => {
			if (dialog) dialog.showModal();
		}}>Delete account</button
	>

	<dialog
		bind:this={dialog}
		aria-labelledby="Delete account"
		aria-describedby="Are you sure you want to delete your account?"
	>
		<h2 id="Delete account">Delete account</h2>
		<p id="Are you sure you want to delete your account?">
			Are you sure you want to delete your account?
		</p>
		<button onclick={deleteAccount}>Yes, delete my account</button>
		<button
			onclick={() => {
				if (dialog) dialog.close();
			}}>No, keep my account</button
		>
	</dialog>
{:else}
	<p>Something went wrong while trying to load your profile!</p>
{/if}
