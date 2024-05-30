<script lang="ts">
	import { type categoryType } from '$utils/lessons';

	let { category }: { category: categoryType } = $props();
</script>

<h2>Table of contents</h2>
{#each category.lessons as section}
	<h3>{section.section}</h3>
	<ul>
		{#each section.lessons as lesson}
			<li>
				<a href={`/lessons/${category.subCategorySlug}/${section.sectionSlug}/${lesson.slug}`}
					>{lesson.title}</a
				>
			</li>
		{/each}
	</ul>
{/each}

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
