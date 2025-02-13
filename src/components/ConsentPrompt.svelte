<script lang="ts">
	import { onMount } from 'svelte';
	import { consent, setConsent } from '$stores/consentManager';
	import { page } from '$app/stores';

	let dialog: HTMLDialogElement;
	const exclude = ['/cookies', '/privacy', '/terms'];

	onMount(() => {
		if (dialog && !$consent) {
			dialog.showModal();
		}
	});

	function keepDialogOpenOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	function closeDialog() {
		if (dialog) {
			dialog.close();
		} else {
			console.error('Dialog element is not defined');
		}
	}

	function grantConsent() {
		setConsent(true);
		if (dialog && dialog.open) {
			dialog.close();
		}
	}
</script>

<dialog
	bind:this={dialog}
	onkeydown={keepDialogOpenOnEscape}
	aria-labelledby="consent-title"
	aria-describedby="consent-description"
>
	<div class="fixed inset-x-0 bottom-0 flex flex-col rounded-t-lg bg-white p-4">
		<h1
			id="consent-title"
			class="mb-4 border-b border-gray-500 pb-2 text-center text-lg font-semibold uppercase sm:text-2xl"
		>
			Access Consent
		</h1>

		<div class="flex items-center justify-between">
			<p id="consent-description" class="text-center text-sm text-gray-700">
				To continue using our site, please review and accept our
				<a href="/privacy" class="text-envisionlyBlue" target="_blank">Privacy Policy</a>.
			</p>
			<button
				class="block w-fit rounded-xl bg-envisionlyLightBlue px-6 py-3 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
				onclick={grantConsent}
				aria-label="Accept and close dialog"
			>
				Accept
			</button>
		</div>
	</div>
</dialog>
