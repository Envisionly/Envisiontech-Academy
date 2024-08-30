<script lang="ts">
	let dialog: HTMLDialogElement;

    function openDialog() {
    if (dialog) {
      dialog.showModal();
    } else {
      console.error('Dialog element is not defined');
    }
  }
  function closeDialog() {
        if (dialog) {
            dialog.close();
        } else {
            console.error('Dialog element is not defined');
        }
    }
</script>
<button on:click={openDialog}>Newsletter</button>
<dialog bind:this={dialog} class ="w-3/12 h-9/12 border-2 border-black">
    <div class="shadow-lg bg-white">
        <button on:click={closeDialog}>Close</button>
    <form class="">
        <div class="flex w-full flex-col">
            <p>Sign up for our Newsletter today!</p>
            <label for="Email" class="text-left text-gray-700">Email</label>
            <input
                name="email"
                type="email"
                id="Email"
                required
                class=" rounded-md border-gray-200 text-sm focus:border-0 focus:ring-2 focus:ring-envisionlyGold"
            />
            <button
            class="mt-4 rounded-full bg-envisionlyBlue px-4 py-2 text-white outline-none transition hover:outline-2 hover:outline-offset-4 hover:outline-envisionlyGold focus:outline-2 focus:outline-envisionlyGold disabled:cursor-not-allowed disabled:bg-envisionlyGold sm:mt-6">Accept</button>
        </div>
    </form>
</div>
</dialog>
<style>
</style>