<script lang="ts">
    let dialog: HTMLDialogElement;
    let showDialog = true; // Set to true for testing purposes

    function closeDialog() {
		if (dialog) {
			dialog.close();
		} else {
			console.error('Dialog element is not defined');
		}
	}
  </script>
  
  <dialog bind:this={dialog}>
    <div class="flex justify-end">
		<button
			onclick={closeDialog}
			class="rounded-bl-xl bg-envisionlyLightBlue px-3 py-1 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
			aria-label="Close"><span class="fa-light fa-times"></span></button
		>
	</div>
    <h1 class="dialog-title">Privacy Policy</h1>
    <p class="dialog-content">
      Please accept our privacy policy to continue using our site. You can read our full <a href="/privacy" class="text-envisionlyBlue" target="_blank" rel="noopener noreferrer">privacy policy</a>.
    </p>
    <button class="dialog-button">
      Accept
    </button>
  </dialog>
  