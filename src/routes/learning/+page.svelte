<script lang="ts">
	import { goto } from '$app/navigation';
	import { lessons } from '$utils/lessons';
	import { tick } from 'svelte';
	import type { ChangeEventHandler } from 'svelte/elements';
	import type { courseType } from '../../ambient.js';
	import { toasts } from '$stores/toasts';

	const { data } = $props();

	let currentTab: string | undefined = $state(undefined);

	if (data.sections && data.sections.length > 0) {
		currentTab = data.sections[0].slug;
	}

	let buttons: { [Key: string]: HTMLButtonElement } = {};

	async function changeTab(lesson: string) {
		currentTab = lesson;
		await tick();
		buttons[lesson].focus();
	}

	function handleKeydown(
		type: 'tab' | 'button',
		event: KeyboardEvent,
		lesson: string,
		course?: courseType
	) {
		if (type == 'tab') {
			const slugs: any[] = [];
			data.sections.forEach((section) => {
				if (section.courses) {
					section.courses.forEach((course) => {
						slugs.push(section.slug + '/' + course.slug);
					});
				} else {
					return;
				}
			});
			const currentIndex = slugs.indexOf(lesson);

			switch (event.key) {
				case 'ArrowRight':
					if (currentIndex < slugs.length - 1) {
						changeTab(slugs[currentIndex + 1]);
					}
					event.preventDefault(); // prevent the default action
					break;
				case 'ArrowLeft':
					if (currentIndex > 0) {
						changeTab(slugs[currentIndex - 1]);
					}
					event.preventDefault(); // prevent the default action
					break;
				case 'Home':
					changeTab(slugs[0]);
					event.preventDefault(); // prevent the default action
					break;
				case 'End':
					changeTab(slugs[slugs.length - 1]);
					event.preventDefault(); // prevent the default action
					break;
				case 'ArrowDown':
					event.preventDefault(); // prevent the default action
					break;
				case 'ArrowUp':
					event.preventDefault(); // prevent the default action
					break;
			}
		} else if (type == 'button' && course) {
			switch (event.key) {
				case 'Enter':
					handleCourseClick(lesson, course);
					break;
				case ' ':
					handleCourseClick(lesson, course);
					break;
			}
		}
	}

	function handleCourseClick(sectionSlug: string, course: courseType) {
		if (course.modules && course.modules[0]?.lessons && course.modules[0].lessons.length > 0) {
			goto(
				`/learning/${sectionSlug}/${course.slug}/${course.modules[0].slug}/${
					course.modules[0].lessons[0].slug
				}`
			);
		} else {
			toasts.add({ type: 'info', message: 'This course is coming soon, please check back later!' });
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

<div class="max-w-screen-xl py-8 sm:py-12 lg:py-16">
	{#if currentTab && data.sections && data.sections}
		<div class="px-4">
			<h2 class="text-center text-3xl font-bold sm:text-4xl">Start Your Learning Journey</h2>
			<p class="mt-4 text-center text-gray-600">
				Choose a topic to get started. We have a range of courses available to help you master the
				skills that power the digital world.
			</p>
		</div>
		<div class="flex">
			<div class="mx-auto sm:hidden">
				<select
					aria-label="Select a topic"
					class=" my-6 rounded-md border-gray-300 focus:border-envisionlyGold focus:outline-none focus:ring-0"
					onchange={(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) => {
						if ((event.currentTarget as HTMLSelectElement).value)
							currentTab = (event.currentTarget as HTMLSelectElement).value;
					}}
				>
					{#each data.sections as section}
						<option value={section.slug}
							>{section.name}: {section.courses ? section.courses.length : 0} courses</option
						>
					{/each}
				</select>
			</div>
			<div class="hidden sm:block">
				<section role="tablist" class="flex">
					{#each data.sections as section}
						<button
							aria-selected={section.slug === currentTab}
							aria-controls={`panel-${section.slug}`}
							tabindex={section.slug === currentTab ? 0 : -1}
							class="shrink-0 border-b border-b-gray-200 p-3 text-sm font-medium text-gray-500 hover:text-gray-700 aria-selected:rounded-t-lg aria-selected:border aria-selected:border-gray-300 aria-selected:border-b-transparent"
							bind:this={buttons[section.slug]}
							onclick={() => changeTab(section.slug)}
							onkeydown={(e) => handleKeydown('tab', e, section.slug)}
							role="tab"
							>{section.name}: {section.courses ? section.courses.length : 0} courses</button
						>
					{/each}
				</section>
			</div>
		</div>

		{#each data.sections as section}
			<div
				class={`grid gap-2 sm:grid-cols-2 lg:grid-cols-3 ${section.slug !== currentTab ? 'hidden' : ''}`}
				role="tabpanel"
				id={`panel-${section.slug}`}
				aria-label={section.name}
			>
				{#if section.courses && section.courses.length > 0}
					{#each section.courses as course}
						<section
							class="flex gap-4 bg-envisionlyTransparentGold p-4"
							role="button"
							tabindex="0"
							onkeydown={(e) => handleKeydown('button', e, section.slug, course)}
							onclick={() => handleCourseClick(section.slug, course)}
						>
							<img
								data-src={`https://envisiontech-academy.gumlet.io/courseImages/${course.image}`}
								alt={`${course.name} logo`}
								class="size-16 rounded-full object-cover"
							/>
							<div>
								<h3 class="text-lg font-bold">
									{course.name}{#if !course.modules || !course.modules.length || !course.modules[0].lessons || !(course.modules[0].lessons.length > 0)}
										{' (Coming Soon)'}{/if}
								</h3>
								<p class="mt-1 text-sm">{course.description}</p>
							</div>
						</section>
					{/each}
				{:else}
					<p class="text-center text-gray-600">
						No courses available at this time. Check back soon!
					</p>
				{/if}
			</div>
		{/each}
	{:else}
		<h1 class="text-center text-3xl font-bold">No Courses Available At This Time</h1>
		<p class="mt-4 text-center text-gray-600">
			We are working hard to bring you new courses. Check back soon!
		</p>
	{/if}
</div>
