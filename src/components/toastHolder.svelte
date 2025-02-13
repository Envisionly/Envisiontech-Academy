<script lang="ts">
	import { toasts } from '$stores/toasts';
	import Toast from '$components/Toast.svelte';
</script>

<section
	aria-roledescription="Notification Region"
	class="fixed left-0 right-0 top-0 z-50 flex w-full flex-col items-center p-5"
	style={$toasts.length === 0
		? 'pointer-events: none;'
		: 'pointer-events: auto;'}
>
	{#each $toasts as toast (toast.id)}
		<Toast {toast} on:dismiss={() => toasts.remove(toast.id)} />
	{/each}
</section>
