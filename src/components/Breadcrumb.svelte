<script lang="ts">
    	import { onMount } from 'svelte';

let pathSegments = [];

onMount(() => {
  const path = window.location.pathname;
  pathSegments = path.split('/').filter(segment => segment);
});

</script>

<wa-breadcrumb>
	{#each pathSegments as segment, index}
	  <wa-breadcrumb-item>
		{segment}
	  </wa-breadcrumb-item>
	{/each}
  </wa-breadcrumb>