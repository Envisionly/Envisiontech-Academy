<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { lessons } from './lessons/lessons';
	let dialog: HTMLDialogElement;

	onNavigate(() => {
		if (dialog) {
			if (dialog.open) {
				dialog.close();
			}
		}
	});
</script>

{#snippet lessonDetailDropdown(category)}
	<details>
		<summary>{category}</summary>
		<ul>
			{#each lessons[category] as subCategory}
				<li>
					<a
						href={`/lessons/${category.toLowerCase()}/${(subCategory.subCategory as string).toLowerCase()}`}
						>{subCategory.subCategory}</a
					>
				</li>
			{/each}
		</ul>
	</details>
{/snippet}

<button onclick={() => dialog.showModal()}>Sidebar</button>
<dialog bind:this={dialog}>
	<div>
		<button onclick={() => dialog.close()}>Close</button>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li>
					{#each Object.keys(lessons) as category}
						{@render lessonDetailDropdown(category)}
					{/each}
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

	div {
		display: flex;
		flex-direction: column;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	a {
		text-decoration: none;
	}
</style>
