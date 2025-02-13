<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentSection } from '$stores/sectionManager';
	import type { courseType, moduleType } from '../../ambient';

	type lessonControlType = {
		title: String;
		slug: String;
	};

	let previousLesson: lessonControlType | undefined = $state(undefined);
	let currentLesson: lessonControlType | undefined = $state(undefined);
	let nextLesson: lessonControlType | undefined = $state(undefined);
	let currentPosition: number = $state(0);
	let maxPosition = $state(0);

	$effect(() => {
		if ($page.url.pathname.split('/').length > 4 && $currentSection) {
			currentLesson = undefined;
			previousLesson = undefined;
			nextLesson = undefined;
			getLessons();
		} else {
			currentLesson = undefined;
			previousLesson = undefined;
			nextLesson = undefined;
		}
	});

	function getLessons() {
		if (
			!$currentSection ||
			!$currentSection?.courses ||
			!$currentSection.courses[0]?.modules ||
			!$currentSection.courses[0].modules[0]?.lessons
		) {
			console.error('No lessons found');
			return;
		}

		let URL: String = $page.url.pathname;
		//Removes the /learning/ from the URL
		let splitURL = URL.split('/').slice(2);
		let courseSlug = `/learning/${$currentSection.slug}/${$currentSection.courses[0].slug}/`;
		if (!courseSlug) return;
		let moduleSlug = splitURL[splitURL.length - 2];
		let lessonSlug: String = splitURL[splitURL.length - 1];

		let moduleIndex = $currentSection?.courses[0]?.modules.findIndex(
			(tempModule) => tempModule.slug === moduleSlug
		);

		if (moduleIndex === undefined || moduleIndex === -1) {
			console.error('Module not found');
			return;
		}

		let lessonIndex =
			$currentSection?.courses[0]?.modules[moduleIndex as number]?.lessons?.findIndex(
				(tempLesson) => tempLesson.slug === lessonSlug
			) ?? -1;

		if (lessonIndex === undefined || lessonIndex === -1) {
			console.error('Lesson not found');
			return;
		}

		getNextCurrentAndPrevious(
			lessonIndex,
			moduleIndex,
			$currentSection.courses[0].modules[moduleIndex],
			$currentSection.courses[0],
			courseSlug
		);
		currentPosition = lessonIndex + 1;
		maxPosition = $currentSection.courses[0].modules[moduleIndex as number].lessons?.length ?? 0;
	}

	function getNextCurrentAndPrevious(
		lessonIndex: number,
		moduleIndex: number,
		module: moduleType,
		course: courseType,
		fullURL: String
	) {
		console.log(module);
		if (!module.lessons) return;
		currentLesson = {
			title: module.lessons[lessonIndex].title,
			slug: `${fullURL}${module.slug}/${module.lessons[lessonIndex].slug}`
		};
		if (lessonIndex > 0) {
			previousLesson = {
				title: `${module.name} - ${module.lessons[lessonIndex - 1].title}`,
				slug: fullURL + module.lessons[lessonIndex - 1].slug
			};
		} else if (lessonIndex === 0) {
			if (moduleIndex > 0 && course.modules && course.modules[moduleIndex - 1]?.lessons) {
				let previousModule = course.modules[moduleIndex - 1];
				if (!previousModule.lessons) return;
				previousLesson = {
					title: `${previousModule.name} - ${previousModule.lessons[previousModule.lessons.length - 1].title}`,
					slug: `${fullURL}${previousModule.slug}/${previousModule.lessons[previousModule.lessons.length - 1].slug}`
				};
			}
		}
		if (lessonIndex < module.lessons.length - 1) {
			nextLesson = {
				title: `${module.name} - ${module.lessons[lessonIndex + 1].title}`,
				slug: `${fullURL}${module.slug}/${module.lessons[lessonIndex + 1].slug}`
			};
		} else if (lessonIndex === module.lessons.length - 1) {
			if (
				course.modules &&
				moduleIndex < course.modules.length - 1 &&
				course.modules[moduleIndex + 1]?.lessons
			) {
				let nextModule = course.modules[moduleIndex + 1];
				if (!nextModule.lessons) return;
				nextLesson = {
					title: `${nextModule.name} - ${nextModule.lessons[0].title}`,
					slug: `${fullURL}${nextModule.slug}/${nextModule.lessons[0].slug}`
				};
			}
		}
	}
</script>

{#if currentLesson}
	<h3 class="sr-only">Lesson Navigation</h3>
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
		<span>Module Progress:</span>
		<div class="screenReaderOnly" aria-roledescription="progress bar" aria-live="polite">
			{((currentPosition / maxPosition) * 100).toFixed()}% complete
		</div>
		<div class="progressBarContainer" aria-hidden="true">
			<div class="progressBar" style="width:{(currentPosition / maxPosition) * 100}%;"></div>
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
