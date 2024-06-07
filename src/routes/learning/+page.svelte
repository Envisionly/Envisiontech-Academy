<script lang="ts">
	import { lessons } from '$utils/lessons';
	import { tick } from 'svelte';

	let currentTab = $state(Object.keys(lessons)[0]);

	let buttons: { [Key: string]: HTMLButtonElement } = {};

	async function changeTab(lesson: string) {
		currentTab = lesson;
		await tick();
		buttons[lesson].focus();
	}

	function handleKeydown(event: KeyboardEvent, lesson: string) {
		const keys = Object.keys(lessons);
		const currentIndex = keys.indexOf(lesson);

		switch (event.key) {
			case 'ArrowRight':
				if (currentIndex < keys.length - 1) {
					changeTab(keys[currentIndex + 1]);
				}
				event.preventDefault(); // prevent the default action
				break;
			case 'ArrowLeft':
				if (currentIndex > 0) {
					changeTab(keys[currentIndex - 1]);
				}
				event.preventDefault(); // prevent the default action
				break;
			case 'Home':
				changeTab(keys[0]);
				event.preventDefault(); // prevent the default action
				break;
			case 'End':
				changeTab(keys[keys.length - 1]);
				event.preventDefault(); // prevent the default action
				break;
			default:
			case 'down':
				event.preventDefault(); // prevent the default action
				break;
			case 'up':
				event.preventDefault(); // prevent the default action
				break;
		}
	}
</script>

<svelte:head>
	<title>Start learning with Envisionly Tech Academy</title>
	<meta
		name="description"
		content="Master the skills that power the digital world. Envisionly Tech Academy offers free comprehensive courses in web development, programming, design, and more. Start building your digital future today!"
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class="text-3xl font-bold text-center sm:text-4xl">Welcome to Envisionly Tech Academy</h2>
<div class="flex">
	<div class="sm:hidden mx-auto">
		<select
			aria-label="Select a topic"
			class=" rounded-md border-gray-300 focus:outline-none focus:ring-0 focus:border-envisionlyGold"
		>
			{#each Object.keys(lessons) as lesson}
				<option>{lesson}: {lessons[lesson].length} courses</option>
			{/each}
		</select>
	</div>
	<div class="hidden sm:block">
		<section role="tablist" class="flex">
			{#each Object.keys(lessons) as lesson}
				<button
					aria-selected={lesson === currentTab}
					tabindex={lesson === currentTab ? 0 : -1}
					class="shrink-0 border-b border-b-gray-200 p-3 text-sm font-medium text-gray-500 hover:text-gray-700 aria-selected:border aria-selected:rounded-t-lg aria-selected:border-gray-300 aria-selected:border-b-transparent"
					bind:this={buttons[lesson]}
					onclick={() => changeTab(lesson)}
					onkeydown={(e) => handleKeydown(e, lesson)}
					role="tab">{lesson}: {lessons[lesson].length} courses</button
				>
			{/each}
		</section>
	</div>
</div>
