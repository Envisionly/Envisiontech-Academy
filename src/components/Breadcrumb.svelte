<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores'; // Import the page store from SvelteKit

	let pathSegments: Array<string> = [];
	let breadcrumbLinks: Array<{ segment: string; url: string; clickable: boolean }> = [];

	// Helper function to format segment names
	function formatSegment(segment: string) {
		return segment.split('-').join(' ');
	}

	// Reactive statement to update breadcrumbLinks whenever the path changes
	$: {
		const path = $page.url.pathname;
		pathSegments = path.split('/').filter((segment) => segment);

		// Define the segments that have corresponding pages
		const clickableSegments = ['learning', pathSegments[pathSegments.length - 1]];

		if (pathSegments.length > 3) {
			clickableSegments.push(pathSegments[2]);
		}

		// Construct breadcrumb links
		breadcrumbLinks = [
			{ segment: 'Home', url: '/', clickable: true },
			...pathSegments.map((segment, index) => {
				const url = '/' + pathSegments.slice(0, index + 1).join('/');
				return {
					segment: formatSegment(segment),
					url,
					clickable: clickableSegments.includes(segment)
				};
			})
		];
	}
</script>

<wa-breadcrumb label="Site Navigation" class="flex items-center p-2">
	{#each breadcrumbLinks as { segment, url, clickable }, index}
		<wa-breadcrumb-item
			class="mr-2 cursor-default text-sm text-gray-700"
			href={clickable ? url : undefined}
			aria-disabled={!clickable}
		>
			{#if clickable}
				<span
					class={`cursor-pointer uppercase text-envisionlyLightBlue hover:text-envisionlyGold ${index == breadcrumbLinks.length - 1 ? 'font-bold' : 'font-normal'} `}
					>{segment}</span
				>
			{:else}
				<span class="cursor-default font-normal uppercase text-gray-500">{segment}</span>
			{/if}
		</wa-breadcrumb-item>
	{/each}
</wa-breadcrumb>
