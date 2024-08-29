<script lang="ts">
	import ContentBlock from '$components/ContentBlock.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Paragraphs</title>
	<meta name="description" content="Learn how to create paragraphs in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2>Paragraphs</h2>
<p>
	Paragraphs are used to group text together. They are created using the <code>&lt;p&gt;</code> tag.
</p>
<p>Here's an example of a paragraph:</p>

<ContentBlock
	name="Paragraph Example"
	contentList={[
		{
			language: 'HTML',
			content: `
<p>This is a paragraph.</p>
`
		}
	]}
/>

<h2>Exercise</h2>

<MultipleChoice
	question="What tag is used to create a paragraph?"
	choices={['&lt;h1&gt;', '&lt;p&gt;', '&lt;a&gt;', '&lt;img&gt;']}
	answer="&lt;p&gt;"
/>
