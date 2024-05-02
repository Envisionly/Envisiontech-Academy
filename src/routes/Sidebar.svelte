<script lang="ts">
	let dialog: HTMLDialogElement;
</script>

<button onclick={() => dialog.showModal()}>Sidebar</button>
<dialog bind:this={dialog}>
	<div>
		<button onclick={() => dialog.close()}>Close</button>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li>
					<details>
						<summary>Languages</summary>
						<ul>
							<li>HTML</li>
						</ul>
					</details>
				</li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</dialog>

<style>
	dialog {
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		width: 10%;
		min-height: 100%;
		background: var(--envisionlyBlue);
		margin: 0;
	}

	dialog > div {
		display: flex;
		flex-direction: column;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	nav ul {
		list-style-type: none;
		padding: 0;
	}

	nav a {
		text-decoration: none;
	}
</style>
