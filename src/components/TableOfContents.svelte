<script lang="ts">
	import { type categoryType } from '$utils/lessons';
	import { onMount } from 'svelte';

	let sideBarDialog: HTMLDialogElement | undefined = $state(undefined);
	let { category }: { category: categoryType } = $props();
	let isMobile: boolean | undefined = $state(undefined);

	onMount(() => {
		isMobile = window.innerWidth < 768;
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 768;
		});
	});
</script>

{#if isMobile}
	<dialog bind:this={sideBarDialog} class="top-0 left-0 min-h-full border-r border-gray-300">
		<div class="flex flex-col">
			<button class="self-end" onclick={() => sideBarDialog?.close()}>Close</button>
			{@render sideBarContents()}
		</div>
	</dialog>

	<button onclick={() => sideBarDialog?.showModal()}>Show Sidebar</button>
{:else}
	<section class="w-[20%] h-full flex flex-col">
		{@render sideBarContents()}
	</section>
{/if}

{#snippet sideBarContents()}
	<div class="flex flex-col">
		<img
			class="w-[80%] mx-auto object-contain"
			src={`/courseImages/${category.image}`}
			alt={`${category.subCategory} logo`}
		/>
		<h2>{category.subCategory}</h2>
	</div>

	<nav aria-label="Course" class="flex flex-col whitespace-normal">
		{#each category.lessons as section}
			<!-- svelte-ignore attribute_quoted -->
			<wa-details class="text-sm font-bold" summary="{section.section}">
			<ul class=" bg-gray-200 text-xs font-normal list-disc list-outside">
				{#each section.lessons as lesson}
					<li class="hover:bg-gray-400">
						<a href={`/learning/${category.subCategorySlug}/${section.sectionSlug}/${lesson.slug}`}
							>{lesson.title}</a
						>
					</li>
				{/each}
			</ul>
		</wa-details>
		{/each}
		
	</nav>
{/snippet}
