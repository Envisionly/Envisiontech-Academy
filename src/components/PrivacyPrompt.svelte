<script lang="ts">
    import { onMount } from 'svelte';
    let dialog: HTMLDialogElement;
    let showDialog = true; // Set to true for testing purposes

    onMount(() => {
    const accepted = localStorage.getItem('privacyPolicyAccepted');
    if (!accepted) {
      showDialog = true;
    }
  });

  $: if (showDialog && dialog) {
    dialog.showModal();
  }

    function closeDialog() {
		if (dialog) {
			dialog.close();
		} else {
			console.error('Dialog element is not defined');
		}
	}

    function acceptPolicy() {
    localStorage.setItem('privacyPolicyAccepted', 'true');
    closeDialog();
  }
  </script>
  
<dialog bind:this={dialog} class="dialog-box">
    <div class="flex justify-end">
        <button
        onclick={closeDialog}
        class="rounded-bl-xl bg-envisionlyLightBlue px-3 py-1 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
        aria-label="Close">
            <span class="fa-light fa-times"></span>
        </button>
    </div>
    <h1 class="mb-2 border-b border-gray-500 pb-2 text-center text-xl font-semibold uppercase sm:text-2xl"
    >Privacy Policy</h1>
    <p class="dialog-content">
        Please accept our privacy policy to continue using our site. You can read our full <a href="/privacy" class="text-envisionlyBlue" target="_blank" rel="noopener noreferrer">privacy policy</a>.
    </p>
    <button class="dialog-button" onclick={acceptPolicy}>
        Accept
    </button>
</dialog>