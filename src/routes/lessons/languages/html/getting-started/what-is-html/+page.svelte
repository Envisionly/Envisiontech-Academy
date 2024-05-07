<script lang="ts">
	import CodeBlock from '../../../../CodeBlock.svelte';
</script>

<svelte:head>
	<title>What is HTML</title>
	<meta
		name="description"
		content="Learn about what HTML actually is and what it's used for in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h1>What is HTML</h1>
<CodeBlock
	name="Basic HTML Page Structure"
	contentList={[
		{
			language: 'HTML',
			content: `
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
	</head>
	<body>
		<h1>This is a Heading</h1>
		<p>This is a paragraph.</p>
	</body>
</html>
`
		}
	]}
></CodeBlock>
