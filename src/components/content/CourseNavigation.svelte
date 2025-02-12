<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { currentSection } from '$stores/sectionManager';

	let drawer: any = $state(undefined);
</script>

{#if $currentSection && $currentSection.courses}
	<!--Drawer for course navigation-->
	<wa-drawer class="drawer-custom" label="Course Navigation" lightDismiss bind:this={drawer}>
		<div class="flex justify-end">
			<!-- svelte-ignore a11y_autofocus -->
			<button
				class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
				autofocus
				data-drawer="close"
				aria-label="Close"
			>
				<span class="fa-light fa-folder-closed"></span>
			</button>
		</div>
		{@render sideBarContents()}
	</wa-drawer>

	<button
		aria-label="Open Course Navigation"
		class="w-fit text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
		onclick={() => (drawer.open = true)}><span class="fa-light fa-folder-open"></span></button
	>

	{#snippet sideBarContents()}
		<div class="flex flex-col">
			<img
				class="mx-auto w-[80%] object-contain"
				data-src={`https://envisiontech-academy.gumlet.io/courseImages/${$currentSection.courses[0].image}`}
				alt={`${$currentSection.courses[0].name} logo`}
			/>
			<h2 class="invisible">{category.subCategory}</h2>
		</div>

		<nav aria-label="Course content" class="flex flex-col space-y-4 whitespace-normal">
			{#each category.lessons as section}
				<!-- svelte-ignore attribute_quoted -->
				<wa-details class="font-bold drop-shadow-md">
					<h3 class="text-lg uppercase" slot="summary">{section.section}</h3>
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

	<style lang="postcss">
		/* Custom class to modify CSS variables based on Tailwind breakpoints */
		.drawer-custom {
			--size: 80vw; /* Default size for small screens */
		}

		@screen sm {
			.drawer-custom {
				--size: 276px; /* Size for small screens */
			}
		}

		@screen lg {
			.drawer-custom {
				--size: 27vw; /* Size for large screens */
			}
		}
	</style>
{/if}
