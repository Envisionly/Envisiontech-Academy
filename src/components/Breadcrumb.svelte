<script>
    import { onMount } from 'svelte';
  
    let pathSegments = [];
    let breadcrumbLinks = [];
  
    onMount(() => {
      const path = window.location.pathname;
      pathSegments = path.split('/').filter(segment => segment);
  
      // Construct breadcrumb links
      breadcrumbLinks = pathSegments.map((segment, index) => {
        const url = '/' + pathSegments.slice(0, index + 1).join('/');
        return { segment, url };
      });
    });
  </script>
  
  <wa-breadcrumb>
    {#each breadcrumbLinks as { segment, url }, index}
      <wa-breadcrumb-item>
        <a href={url}>{segment}</a>
      </wa-breadcrumb-item>
    {/each}
  </wa-breadcrumb>