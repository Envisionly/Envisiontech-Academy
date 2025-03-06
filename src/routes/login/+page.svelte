<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Sign In</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 w-full max-w-md rounded-lg shadow-lg flex flex-col gap-4">
        <h1 class="text-2xl font-medium text-center">Sign In</h1>
        <div class="flex flex-col gap-4">
            <button class="bg-purple-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-purple-700"
            aria-label="Sign in with your GitHub account" on:click={() => goto('/login/github')}>
                Sign in with GitHub
                <span class="fa-brands fa-github text-xl"></span>
            </button>
            <div hidden>
            <button hidden class="bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-blue-500"
            aria-label="sign in with your Google account" on:click={() => goto('/login/google')}>
                Sign in with Google
                <span class="fa-brands fa-google text-xl"></span>
            </button>

            <button class="bg-black text-white py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-800" 
            aria-label="sign in with your apple ID" on:click={() => goto('/login/apple')}>
                Sign in with Apple
                <span class="fa-brands fa-apple text-xl"></span>
            </button></div>
        </div>
    </div>
</div>
