<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { lessons } from '$utils/lessons';

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
		if (!lessonsCategory) {
			console.error(`Category ${category} not found in lessons`);
			return;
		}
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
		getNextCurrentAndPrevious(lessonIndex, lessonsSection, lessonsSubCategory, fullURL);
		currentPosition = lessonIndex + 1;
		maxPosition = lessonsSection?.lessons.length as number;
	}

	function getNextCurrentAndPrevious(
		lessonIndex: number,
		tempLessonsSection: any,
		tempLessonsSubcategory: any,
		fullURL: String
	) {
		currentLesson = {
			title: tempLessonsSection.lessons[lessonIndex].title,
			slug: fullURL + tempLessonsSection.lessons[lessonIndex].slug
		};
		if (lessonIndex > 0) {
			previousLesson = {
				title: `${tempLessonsSection.section} - ${tempLessonsSection.lessons[lessonIndex - 1].title}`,
				slug: fullURL + tempLessonsSection.lessons[lessonIndex - 1].slug
			};
		} else if (lessonIndex === 0) {
			let previousSection = tempLessonsSubcategory.lessons.findIndex(
				(tempSection: any) => tempSection.sectionSlug === tempLessonsSection.sectionSlug
			);
			if (previousSection > 0) {
				previousLesson = {
					title: `${tempLessonsSubcategory.lessons[previousSection - 1].section} - ${tempLessonsSubcategory.lessons[previousSection - 1].lessons[tempLessonsSubcategory.lessons[previousSection - 1].lessons.length - 1].title}`,
					slug:
						'/lessons/' +
						tempLessonsSubcategory.subCategorySlug +
						'/' +
						tempLessonsSubcategory.lessons[previousSection - 1].sectionSlug +
						'/' +
						tempLessonsSubcategory.lessons[previousSection - 1].lessons[
							tempLessonsSubcategory.lessons[previousSection - 1].lessons.length - 1
						].slug
				};
			}
		}
		if (lessonIndex < tempLessonsSection.lessons.length - 1) {
			nextLesson = {
				title: `${tempLessonsSection.section} - ${tempLessonsSection.lessons[lessonIndex + 1].title}`,
				slug: fullURL + tempLessonsSection.lessons[lessonIndex + 1].slug
			};
		} else if (lessonIndex === tempLessonsSection.lessons.length - 1) {
			let nextSection = tempLessonsSubcategory.lessons.findIndex(
				(tempSection: any) => tempSection.sectionSlug === tempLessonsSection.sectionSlug
			);
			if (nextSection < tempLessonsSubcategory.lessons.length - 1) {
				nextLesson = {
					title: `${tempLessonsSubcategory.lessons[nextSection + 1].section} - ${tempLessonsSubcategory.lessons[nextSection + 1].lessons[0].title}`,
					slug:
						'/lessons/' +
						tempLessonsSubcategory.subCategorySlug +
						'/' +
						tempLessonsSubcategory.lessons[nextSection + 1].sectionSlug +
						'/' +
						tempLessonsSubcategory.lessons[nextSection + 1].lessons[0].slug
				};
			}
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
