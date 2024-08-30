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
<dialog bind:this={dialog}>
    <div>
        <button on:click={closeDialog}>Close</button>
    </div>
    <form>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </form>
</dialog>
<style>	dialog {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 10%;
    min-height: 100%;
    background: var(--envisionlyBlue);
    margin: 0;
}</style>