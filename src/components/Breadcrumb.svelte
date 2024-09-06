<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'; // Import the page store from SvelteKit
  
    let pathSegments = [];
    let breadcrumbLinks = [];
  
    // Helper function to format segment names
    function formatSegment(segment) {
      return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  
    // Reactive statement to update breadcrumbLinks whenever the path changes
    $: {
      const path = $page.url.pathname;
      pathSegments = path.split('/').filter(segment => segment);
  
      // Define the segments that have corresponding pages
      const clickableSegments = ['learning', 'html', 'what-is-html'];
  
      // Construct breadcrumb links
      breadcrumbLinks = [{ segment: 'Home', url: '/', clickable: true }, ...pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/');
        return { segment: formatSegment(segment), url, clickable: clickableSegments.includes(segment) };
      })];
    }
  </script>
  
  <wa-breadcrumb label="Site Navigation" class="flex items-center p-2 bg-gray-100">
    {#each breadcrumbLinks as { segment, url, clickable }, index}
      <wa-breadcrumb-item class="mr-2 text-sm text-gray-700 cursor-default">
        {#if clickable}
          <a href={url} class="text-envisionlyLightBlue font-semibold hover:text-envisionlyGold hover:font-bold cursor-pointer">{segment}</a>
        {:else}
          <span class="text-gray-500 font-light cursor-default">{segment}</span>
        {/if}
      </wa-breadcrumb-item>
    {/each}
  </wa-breadcrumb>