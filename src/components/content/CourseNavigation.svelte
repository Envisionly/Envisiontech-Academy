<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { currentSection } from '$stores/sectionManager';
	import { page } from '$app/stores';

	let drawer: any = $state(undefined);
</script>

{#if $currentSection && $currentSection.courses && $currentSection.courses.length > 0 && $currentSection.courses[0].modules && $currentSection.courses[0].modules.length > 0}
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
		{#if $currentSection.courses && $currentSection.courses.length > 0 && $currentSection.courses[0].modules && $currentSection.courses[0].modules.length > 0}
			<div class="flex flex-col">
				<img
					class="mx-auto w-[80%] object-contain"
					data-src={`https://envisiontech-academy.gumlet.io/courseImages/${$currentSection.courses[0].image}`}
					alt={`${$currentSection.courses[0].name} logo`}
				/>
				<h2 class="invisible">{$currentSection.courses[0].name}</h2>
			</div>

			<nav aria-label="Course content" class="flex flex-col space-y-4 whitespace-normal">
				{#each $currentSection.courses[0].modules as module}
					<!-- svelte-ignore attribute_quoted -->
					<wa-details
						open={$page.url.pathname.split('/')[4].includes(module.slug)}
						class="font-bold drop-shadow-md"
					>
						<h3 class="text-lg uppercase" slot="summary">
							{module.name}{#if !module.lessons || !(module.lessons.length > 0)}{' (Coming Soon!)'}{:else}{` (${module.lessons.length})`}{/if}
						</h3>
						{#if module.lessons && module.lessons.length > 0}
							<ul class=" text-md font-normal">
								{#each module.lessons as lesson}
									<li
										class="text-envisionlyLightBlue hover:text-envisionlyGold focus:text-envisionlyGold active:text-envisionlyTransparentGold"
									>
										<a
											href={`/learning/${$currentSection.slug}/${$currentSection.courses[0].slug}/${module.slug}/${lesson.slug}`}
											>{lesson.title}</a
										>
									</li>
								{/each}
							</ul>
						{:else}
							<p class="text-envisionlyLightBlue">Coming Soon!</p>
						{/if}
					</wa-details>
				{/each}
			</nav>
		{/if}
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
