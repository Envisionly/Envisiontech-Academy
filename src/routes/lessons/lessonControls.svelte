<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { lessons } from './lessons';

	type lessonControlType = {
		title: String;
		slug: String;
	};

	let previousLesson: lessonControlType | undefined = undefined;
	let currentLesson: lessonControlType | undefined = undefined;
	let nextLesson: lessonControlType | undefined = undefined;
	let currentPosition: number = 0;
	let maxPosition = 0;

	$: {
		if ($page.url.pathname.split('/').length > 4) {
			currentLesson = undefined;
			previousLesson = undefined;
			nextLesson = undefined;
			getLessons();
		} else {
			currentLesson = undefined;
			previousLesson = undefined;
			nextLesson = undefined;
		}
	}

	function getLessons() {
		let URL: String = $page.url.pathname;
		//Removes the /lessons/ from the URL
		URL = URL.replace('/lessons/', '');
		let category: String = URL.split('/')[0];
		let subCategory: String = category + '/' + URL.split('/')[1];
		let section: String = URL.split('/')[2];
		let lesson: String = URL.split('/')[3];

		let lessonsCategory = lessons[category as keyof typeof lessons];
		let lessonsSubCategory = lessonsCategory.find(
			(tempSubCategory) => tempSubCategory.subCategorySlug === subCategory
		);
		let lessonsSection = lessonsSubCategory?.lessons.find(
			(tempSection) => tempSection.sectionSlug === section
		);
		let lessonIndex = lessonsSection?.lessons.findIndex((tempLesson) => tempLesson.slug === lesson);
		if (lessonIndex === undefined || lessonIndex === -1) {
			console.error('Lesson not found');
			return;
		}
		let fullURL = '/lessons/' + subCategory + '/' + section + '/';
		getNextCurrentAndPrevious(lessonIndex, lessonsSection?.lessons, fullURL);
		currentPosition = lessonIndex + 1;
		maxPosition = lessonsSection?.lessons.length as number;
	}

	function getNextCurrentAndPrevious(lessonIndex: number, tempLessons: any, fullURL: String) {
		currentLesson = {
			title: tempLessons[lessonIndex].title,
			slug: fullURL + tempLessons[lessonIndex].slug
		};
		if (lessonIndex > 0) {
			previousLesson = {
				title: tempLessons[lessonIndex - 1].title,
				slug: fullURL + tempLessons[lessonIndex - 1].slug
			};
		}
		if (lessonIndex < tempLessons.length - 1) {
			nextLesson = {
				title: tempLessons[lessonIndex + 1].title,
				slug: fullURL + tempLessons[lessonIndex + 1].slug
			};
		}
	}
</script>

{#if currentLesson}
	{#if previousLesson !== undefined}
		<button onclick={() => goto(previousLesson?.slug as string)}
			>Previous: {previousLesson.title}</button
		>
	{/if}
	{#if currentLesson}
		<span>{currentLesson.title}</span>
	{/if}
	{#if nextLesson !== undefined}
		<button onclick={() => goto(nextLesson?.slug as string)}>Next: {nextLesson.title}</button>
	{/if}
	<div>
		<span>Section Progress:</span>
		<div class="progressBarContainer" aria-roledescription="progress bar">
			<div
				class="progressBar"
				style="width:{(currentPosition / maxPosition) * 100}%;"
				aria-label="{(currentPosition / maxPosition) * 100}% complete"
				aria-live="polite"
			></div>
		</div>
	</div>
{/if}

<style>
	.progressBarContainer {
		display: inline-block;
		width: 80%;
		height: 10px;
		background-color: lightgray;
		border-radius: 10px;
	}

	.progressBar {
		height: 100%;
		background-color: var(--envisionlyBlue);
		border-radius: 10px;
	}
</style>
