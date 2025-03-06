<script lang="ts">
	import { page } from '$app/stores';
	import { lessons, type lessonsType, type categoryType } from '$utils/lessons';
	import CourseNavigation from '$components/content/CourseNavigation.svelte';
	import Breadcrumb from '$components/Breadcrumb.svelte';

	const { children } = $props();

	let subCategory: categoryType | undefined = $state(undefined);

	$effect(() => {
		if ($page.url.pathname.split('/').length > 4) {
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
	});
</script>

<aside class="flex justify-between bg-gray-100">
	<Breadcrumb />
	{#if subCategory}
		<div class="mr-4 flex">
			<CourseNavigation category={subCategory} />
		</div>
	{/if}
</aside>

{@render children()}
