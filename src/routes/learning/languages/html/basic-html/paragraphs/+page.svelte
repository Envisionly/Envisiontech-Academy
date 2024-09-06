<script lang="ts">
	import ContentBlock from '$components/ContentBlock.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Paragraphs</title>
	<meta name="description" content="Learn how to create paragraphs in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class="font-bold text-xl">Paragraphs</h2>
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
<br>
<h2 class="font-bold text-lg">Exercise</h2>

<MultipleChoice
	question="What tag is used to create a paragraph?"
	choices={['<h1>', '<p>', '<a>', '<img>']}
	answer="<p>"
/>
