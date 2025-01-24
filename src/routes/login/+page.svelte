<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 w-full max-w-md rounded-lg shadow-lg flex flex-col gap-4">
        <h1 class="text-2xl font-medium text-center">Sign In</h1>
        <div class="flex justify-center gap-4">
            <button class="bg-purple-800 text-white py-2 px-4 rounded flex items-center gap-2 hover:bg-purple-700" on:click={() => goto('/login/github')}>
                Sign in with GitHub
                <span class="fa-brands fa-github text-xl"></span>
            </button>
        </div>
    </div>
</div>
