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

<button onclick={openDialog} class="text-center text-sm text-gray-700"
	>Sign up to our Newsletter</button
>

<dialog bind:this={dialog} class="w-2/5 h-9/12 border border-envisionlyGold">
	<div class="shadow-lg bg-white">
		<button
			onclick={closeDialog}
			class=" w-8 h-1/3 text-white bg-envisionlyBlue outline-none transition hover:border-2 hover:border-black focus:border-2 focus:border-envisionlyGold disabled:cursor-not-allowed disabled:bg-envisionlyGold"
			>X</button
		>
		<form method="POST" class="flex flex-col items-center gap-6">
			<div class="flex w-full flex-col">
				<p>Enter your email below to register for our newsletter</p>
				<label for="Email" class="text-left text-gray-700">Email</label>
				<input
					name="email"
					type="email"
					id="Email"
					required
					class=" w-3/4 rounded-md border-gray-200 text-sm focus:border-0 focus:ring-2 focus:ring-envisionlyGold"
				/>

				<input type="checkbox" id="terms" name="terms" required />
				<label for="terms" class="text-left text-gray-700">
					By checking this box, you agree to our
					<a href="/terms" class="text-envisionlyBlue">terms and conditions</a> and
					<a href="/privacy" class="text-envisionlyBlue">privacy policy</a>
				</label>

				<button
					class=" w-3/4 mt-4 rounded-full bg-envisionlyBlue px-4 py-2 text-white outline-none transition hover:outline-2 hover:outline-offset-4 hover:outline-envisionlyGold focus:outline-2 focus:outline-envisionlyGold disabled:cursor-not-allowed disabled:bg-envisionlyGold sm:mt-6"
					>Sign Up</button
				>
			</div>
		</form>
	</div>
</dialog>
