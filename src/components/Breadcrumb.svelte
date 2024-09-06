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
      breadcrumbLinks = pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/');
        return { segment, url, clickable: clickableSegments.includes(segment) };
      });
    });
  </script>
  
  <wa-breadcrumb>
    {#each breadcrumbLinks as { segment, url, clickable }, index}
      <wa-breadcrumb-item>
        {#if clickable}
          <a href={url}>{segment}</a>
        {:else}
          <span>{segment}</span>
        {/if}
      </wa-breadcrumb-item>
    {/each}
  </wa-breadcrumb>