<script lang="ts">
	import LessonControls from '$components/LessonControls.svelte';
	import { page } from '$app/stores';
	import { lessons, type lessonsType, type categoryType } from '$utils/lessons';
	import CourseNavigation from '$components/CourseNavigation.svelte';
	import Breadcrumb from '$components/Breadcrumb.svelte';
	let subCategory: categoryType | undefined = undefined;

	$: if ($page.url.pathname.split('/').length > 4) {
		let currentPathCategory = $page.url.pathname.split('/')[2];
		let currentPathSubCategory = $page.url.pathname.split('/')[3];
		// Get the current category
		subCategory = lessons[currentPathCategory].find(
			(tempSubCategory: categoryType) =>
				tempSubCategory.subCategorySlug === currentPathCategory + '/' + currentPathSubCategory
		);
	} else {
		subCategory = undefined;
	}
</script>

<aside class="flex justify-between bg-gray-100">
	<Breadcrumb />
	{#if subCategory}
		<div class="mr-4 flex">
			<CourseNavigation category={subCategory} />
		</div>
	{/if}
</aside>

<aside><LessonControls /></aside>

<div id="course">
	<slot />
</div>

<aside class="screenReaderOnly"><LessonControls /></aside>
