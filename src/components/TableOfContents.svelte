<script lang="ts">
	import { type categoryType } from '$utils/lessons';

	let expanded = $state(false);
	let { category }: { category: categoryType } = $props();
</script>

{#if expanded}
	<section
		class="flex flex-col w-[20%] h-full border-r border-gray-300"
		aria-roledescription="Sidebar"
	>
		<div class="flex flex-col">
			<img
				class="w-[80%] mx-auto object-contain"
				src={`/courseImages/${category.image}`}
				alt={`${category.subCategory} logo`}
			/>
			<h2>{category.subCategory}</h2>
		</div>

		<section class="flex flex-col whitespace-normal">
			{#each category.lessons as section}
				<h3 class="text-sm">{section.section}</h3>
				<ul class="text-xs">
					{#each section.lessons as lesson}
						<li>
							<a href={`/lessons/${category.subCategorySlug}/${section.sectionSlug}/${lesson.slug}`}
								>{lesson.title}</a
							>
						</li>
					{/each}
				</ul>
			{/each}
		</section>
	</section>
{:else}
	<button
		class="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
		onclick={() => (expanded = true)}>Show Sidebar</button
	>
{/if}
