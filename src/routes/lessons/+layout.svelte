<script lang="ts">
	import LessonControls from './lessonControls.svelte';
	import { page } from '$app/stores';
	import { lessons, type lessonsType, type categoryType } from './lessons';
	import TableOfContents from './TableOfContents.svelte';

	let subCategory: categoryType | undefined = undefined;

	$: if ($page.url.pathname.split('/').length > 4) {
		let currentPathCategory = $page.url.pathname.split('/')[2];
		let currentPathSubCategory = $page.url.pathname.split('/')[3];
		// Get the current category
		subCategory = lessons[currentPathCategory].find(
			(tempSubCategory: categoryType) =>
				tempSubCategory.subCategorySlug === currentPathCategory + '/' + currentPathSubCategory
		);
	}
</script>

<aside><LessonControls /></aside>
<div class="mainPage">
	{#if subCategory}
		<div class="lessonSideBar"><TableOfContents category={subCategory} /></div>
	{/if}
	<div class="pageContent">
		<slot />
	</div>
</div>
<aside>
	<h2>Get Involved</h2>
	<p>
		Do you have a question about this page? Would you like to suggest an improvement? Please <a
			href="mailto:contact@envisionly.tech">email us</a
		>
		or go to our
		<a
			href={'https://github.com/Envisionly/Envisionly-Tech-Academy/tree/main/src/routes' +
				$page.url.pathname +
				'/+page.svelte'}>GitHub</a
		>
	</p>
</aside>

<style>
	.mainPage {
		display: flex;
	}
	.pageContent {
		flex: 8;
	}
	.lessonSideBar {
		flex: 1;
		text-align: center;
	}
</style>
