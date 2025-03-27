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
	function onRegister() {
		//do some validation here
		console.log('Registered');
		//alert the user that they have registered for the newsletter
	}
</script>

<button
	onclick={openDialog}
	class="text-sm text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
	>Sign up to our Newsletter</button
>

<dialog bind:this={dialog} class="rounded-lg">
	<div class="flex justify-end">
		<button
			onclick={closeDialog}
			class="rounded-bl-xl bg-envisionlyLightBlue px-3 py-1 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
			aria-label="Close"><span class="fa-light fa-times"></span></button
		>
	</div>
	<form method="POST" class="flex flex-col gap-6 p-8">
		<h2
			class="mb-2 border-b border-gray-500 pb-2 text-center text-xl font-semibold uppercase sm:text-2xl"
		>
			Register for our newsletter
		</h2>

		<div class="flex flex-col">
			<label for="Email" class="text-left text-gray-700">Email</label>
			<!-- svelte-ignore a11y_autofocus -->
			<input
				autofocus
				name="email"
				type="email"
				id="Email-input"
				required
				class=" rounded-md border-gray-200 text-sm focus:border-0 focus:ring-2 focus:ring-envisionlyGold"
			/>
		</div>

		<div class="flex gap-2">
			<div>
				<input
					type="checkbox"
					class="checked:bg-envisionlyLightBlue checked:hover:bg-envisionlyGold checked:hover:outline-envisionlyGold focus:outline-envisionlyLightBlue checked:focus:bg-envisionlyGold"
					id="accept-policy"
					name="accept"
					required
				/>
			</div>
			<div>
				<label for="accept" class="text-left text-sm text-gray-700">
					By checking this box, you agree to our
					<a href="/terms" class="text-envisionlyBlue" target="_blank" rel="noopener noreferrer">terms and conditions</a> and
					<a href="/privacy" class="text-envisionlyBlue" target="_blank" rel="noopener noreferrer">privacy policy</a>
				  </label>
			</div>
		</div>

		<button
			class="mx-auto w-fit rounded-xl bg-envisionlyLightBlue px-4 py-2 text-white hover:bg-envisionlyGold focus:bg-envisionlyGold active:bg-envisionlyTransparentGold"
			>Sign Up</button
		>
	</form>
</dialog>
