<script>
    import { onMount } from 'svelte';
  
    let pathSegments = [];
    let breadcrumbLinks = [];
  
    onMount(() => {
      const path = window.location.pathname;
      pathSegments = path.split('/').filter(segment => segment);
  
      // Define the segments that have corresponding pages
      const clickableSegments = ['learning', 'html', 'what-is-html'];
  
      // Construct breadcrumb links
      breadcrumbLinks = [{ segment: 'Home', url: '/', clickable: true }, ...pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/');
        return { segment, url, clickable: clickableSegments.includes(segment) };
      })];
    });
  </script>
  
  <wa-breadcrumb class="flex items-center p-2 border border-gray-300 rounded bg-gray-100">
    {#each breadcrumbLinks as { segment, url, clickable }, index}
      <wa-breadcrumb-item class="mr-2 text-sm text-gray-700">
        {#if clickable}
          <a href={url} class="text-envisionlyLightBlue hover:text-envisionlyGold">{segment}</a>
        {:else}
          <span class="text-envisionlyLightBlue hover:text-gray-500">{segment}</span>
        {/if}
        {#if index < breadcrumbLinks.length - 1}
          <span class="mx-2 text-gray-400"></span>
        {/if}
      </wa-breadcrumb-item>
    {/each}
  </wa-breadcrumb>