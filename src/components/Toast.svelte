<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { type Toast } from '$stores/toasts';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let toast: Toast;
</script>

<section
	transition:fly={{ duration: 700, opacity: 0.1, y: -100 }}
	role="alert"
	class="flex items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md"
>
	<div transition:scale={{ delay: 300, duration: 300 }}>
		{#if toast.type === 'success'}
			<div class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
				<span class="fa-solid fa-check text-white"></span>
			</div>
		{:else if toast.type === 'error'}
			<div class="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
				<span class="fa-solid fa-xmark text-white"></span>
			</div>
		{:else if toast.type === 'info'}
			<div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
				<span class="fa-solid fa-info text-white"></span>
			</div>
		{/if}
	</div>
	<p>{toast.message}</p>
</section>
