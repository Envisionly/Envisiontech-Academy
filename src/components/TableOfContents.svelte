<script lang="ts">
	import { type categoryType } from '$utils/lessons';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	let sideBarDialog: HTMLDialogElement | undefined = $state(undefined);
	let { category }: { category: categoryType } = $props();
	let isMobile: boolean | undefined = $state(undefined);
	let drawer: any;

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
	<section class=" flex flex-col">
		{@render sideBarContents()}
	</section>
	<div class="flex justify-end ">
	<button class=" h-[15%] bg-envisionlyLightBlue hover:bg-blue-500 text-white font-bold rounded"
	onclick={() => drawer.open = true}>More Courses</button>
</div>
{/if}

{#snippet sideBarContents()}

<!--Drawer for more course content-->
<wa-drawer aria-label="Course"  bind:this={drawer}>
	<button data-drawer="close" class=" bg-envisionlyLightBlue hover:bg-blue-500 text-white py-2 px-2 font-bold rounded" aria-label="Close">View Page</button>
	<div class="flex flex-col">
		<img
			class="w-[80%] mx-auto object-contain"
			src={`/courseImages/${category.image}`}
			alt={`${category.subCategory} logo`}
		/>
		<h2 class="invisible">{category.subCategory}</h2>
	</div>

	
	<nav aria-label="Course content" class="flex flex-col whitespace-normal space-y-4">
		{#each category.lessons as section}
			<!-- svelte-ignore attribute_quoted -->
			<wa-details class="font-bold drop-shadow-md">
				<h3 class="text-lg"
				slot="summary">{section.section}</h3>
			<ul class=" text-md font-normal ">
				{#each section.lessons as lesson}
					<li class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold">
						<a href={`/learning/${category.subCategorySlug}/${section.sectionSlug}/${lesson.slug}`}
							>{lesson.title}</a
						>
					</li>
				{/each}
			</ul>
		</wa-details>
		{/each}
	</nav>
</wa-drawer>
{/snippet}
