<script lang="ts">
	import LessonControls from '$components/LessonControls.svelte';
	import { page } from '$app/stores';
	import { lessons, type lessonsType, type categoryType } from '$utils/lessons';
	import TableOfContents from '$components/TableOfContents.svelte';
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
<Breadcrumb />
<div class="flex">
	{#if subCategory}
		<TableOfContents category={subCategory} />
	{/if}
	<div class="pageContent ">
		<slot />
	</div>
</div>
<aside><LessonControls /></aside>

<aside class="screenReaderOnly"><LessonControls /></aside>
