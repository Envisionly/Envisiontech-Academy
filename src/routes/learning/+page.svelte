<script lang="ts">
	import { goto } from '$app/navigation';
	import { lessons } from '$utils/lessons';
	import { tick } from 'svelte';
	import type { ChangeEventHandler } from 'svelte/elements';
	import Breadcrumb from '$components/Breadcrumb.svelte';

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
			case 'ArrowDown':
				event.preventDefault(); // prevent the default action
				break;
			case 'ArrowUp':
				event.preventDefault(); // prevent the default action
				break;
		}
	}
</script>

<svelte:head>
	<title>Start learning with Envisiontech Academy</title>
	<meta
		name="description"
		content="Master the skills that power the digital world. Envisiontech Academy offers free comprehensive courses in web development, programming, design, and more. Start building your digital future today!"
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>
<Breadcrumb />
<div class="max-w-screen-xl py-8 sm:py-12 lg:py-16">
	<div class="px-4">
		<h2 class="text-3xl font-bold text-center sm:text-4xl">Start Your Learning Journey</h2>
		<p class="text-center mt-4 text-gray-600">
			Choose a topic to get started. We have a range of courses available to help you master the
			skills that power the digital world.
		</p>
	</div>
	<div class="flex">
		<div class="sm:hidden mx-auto">
			<select
				aria-label="Select a topic"
				class=" rounded-md my-6 border-gray-300 focus:outline-none focus:ring-0 focus:border-envisionlyGold"
				onchange={(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) => {
					if ((event.currentTarget as HTMLSelectElement).value)
						currentTab = (event.currentTarget as HTMLSelectElement).value;
				}}
			>
				{#each Object.keys(lessons) as lesson}
					<option value={lesson}>{lesson}: {lessons[lesson].length} courses</option>
				{/each}
			</select>
		</div>
		<div class="hidden sm:block">
			<section role="tablist" class="flex">
				{#each Object.keys(lessons) as lesson}
					<button
						aria-selected={lesson === currentTab}
						aria-controls={`panel-${lesson}`}
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

	{#each Object.keys(lessons) as lesson}
		<div
			class={`grid gap-2 sm:grid-cols-2 lg:grid-cols-3 ${lesson !== currentTab ? 'hidden' : ''}`}
			role="tabpanel"
			id={`panel-${lesson}`}
			aria-label={lesson}
		>
			{#each lessons[lesson] as course}
				<section
					class="flex gap-4 p-4 bg-envisionlyTransparentGold"
					role="button"
					tabindex="0"
					onclick={() =>
						goto(
							`/learning/${course.subCategorySlug}/${course.lessons[0].sectionSlug}/${course.lessons[0].lessons[0].slug}`
						)}
				>
					<img
						src={`/courseImages/${course.image}`}
						alt=""
						class="size-16 rounded-full object-cover"
					/>
					<div>
						<h3 class="text-lg font-bold">{course.subCategory}</h3>
						<p class="mt-1 text-sm">{course.description}</p>
					</div>
				</section>
			{/each}
		</div>
	{/each}
</div>
