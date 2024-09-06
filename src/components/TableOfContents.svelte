<script lang="ts">
	import { type categoryType } from '$utils/lessons';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	let sideBarDialog: HTMLDialogElement | undefined = $state(undefined);
	let { category }: { category: categoryType } = $props();
	let isMobile: boolean | undefined = $state(undefined);
	let drawer: any = $state(undefined);

	onMount(() => {
		isMobile = window.innerWidth < 768;
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 768;
		});
	});
</script>

{#if isMobile}
	<dialog bind:this={sideBarDialog} class="left-0 top-0 min-h-full border-r border-gray-300">
		<div class="flex flex-col">
			<button class="self-end" onclick={() => sideBarDialog?.close()}>Close</button>
			{@render sideBarContents()}
		</div>
	</dialog>

	<button onclick={() => sideBarDialog?.showModal()}>Show Sidebar</button>
{:else}
	<!--Drawer for more course content-->
	<wa-drawer label="Course Navigation" lightDismiss bind:this={drawer}>
		<!-- svelte-ignore a11y_autofocus -->
		<button
			autofocus
			data-drawer="close"
			class=" rounded bg-envisionlyLightBlue px-2 py-2 font-bold text-white hover:bg-blue-500"
			aria-label="Close">View Page</button
		>
		{@render sideBarContents()}
	</wa-drawer>

	<div class="flex justify-end">
		<button
			class=" h-[15%] rounded bg-envisionlyLightBlue font-bold text-white hover:bg-blue-500"
			onclick={() => (drawer.open = true)}>Open Course Navigation</button
		>
	</div>
{/if}

{#snippet sideBarContents()}
	<div class="flex flex-col">
		<img
			class="mx-auto w-[80%] object-contain"
			src={`/courseImages/${category.image}`}
			alt={`${category.subCategory} logo`}
		/>
		<h2 class="invisible">{category.subCategory}</h2>
	</div>

	<nav aria-label="Course content" class="flex flex-col space-y-4 whitespace-normal">
		{#each category.lessons as section}
			<!-- svelte-ignore attribute_quoted -->
			<wa-details class="font-bold drop-shadow-md">
				<h3 class="text-lg" slot="summary">{section.section}</h3>
				<ul class=" text-md font-normal">
					{#each section.lessons as lesson}
						<li
							class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
						>
							<a
								href={`/learning/${category.subCategorySlug}/${section.sectionSlug}/${lesson.slug}`}
								>{lesson.title}</a
							>
						</li>
					{/each}
				</ul>
			</wa-details>
		{/each}
	</nav>
{/snippet}
