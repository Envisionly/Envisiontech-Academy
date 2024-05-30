<script lang="ts">
	import { htmlLessons } from '$utils/languages/html';
	import TableOfContents from '$components/TableOfContents.svelte';
</script>

<svelte:head>
	<title>HTML Course Overview</title>
	<meta name="description" content="Learn HTML with our free course" />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h1>Welcome to the HTML course</h1>
<p>Master the building blocks of the web: Learn HTML and build your own web pages.</p>
<TableOfContents category={htmlLessons} />
