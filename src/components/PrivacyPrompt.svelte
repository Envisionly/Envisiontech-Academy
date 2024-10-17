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
    function rejectDialog() {
       close();
    }

    function acceptPolicy() {
    localStorage.setItem('privacyPolicyAccepted', 'true');
    closeDialog();
  }
  </script>
  
<dialog bind:this={dialog} class="rounded-lg shadow-lg mx-auto w-1/2">
    <div class="flex justify-end">
        <button
        onclick={rejectDialog}
        class="rounded-bl-xl bg-envisionlyLightBlue px-3 py-1 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
        aria-label="Close">
            <span class="fa-light fa-times"></span>
        </button>
    </div>
    <h1 class="mb-4 border-b border-gray-500 pb-2 text-center text-lg font-semibold uppercase sm:text-2xl"
    >Privacy Policy</h1>
    <p class="text-center text-sm text-gray-700">
        To continue using our site, please review and accept our <a href="/privacy" class="text-envisionlyBlue" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>
    <button
    class="block mx-auto mt-6 w-fit rounded-xl bg-envisionlyLightBlue px-6 py-3 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
    onclick={acceptPolicy}
  >
    Accept
  </button>
</dialog>