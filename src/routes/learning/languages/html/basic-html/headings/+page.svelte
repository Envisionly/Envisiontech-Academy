<script>
	import ContentBlock from '$components/ContentBlock.svelte';
	import CompleteTheSnippetMultipleChoice from '$components/CompleteTheSnippetMultipleChoice.svelte';
</script>

<svelte:head>
	<title>Headings</title>
	<meta name="description" content="Learn how to create headings in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class="font-bold text-xl">Headings</h2>
<p>
	Headings are used to define the structure of a web page. They are created using the
	<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. The <code>&lt;h1&gt;</code> tag is the
	largest heading, and the <code>&lt;h6&gt;</code> tag is the smallest heading. Headings emphasise importance 
	of your content and help users to understand the structure of your page.
</p>
<br>
<p class="font-bold">Here's an example of headings:</p>

<ContentBlock
	name="Heading Example"
	contentList={[
		{
			language: 'HTML',
			content: `
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
`
		}
	]}
/>

<h2>Exercise</h2>

<CompleteTheSnippetMultipleChoice
	question="Fill in the blanks to complete the code snippet"
	snippet={`<h1>My heading<___>
___My paragraph<___>`}
	choices={[
		['/h1', 'img', '/p'],
		['<h2>', '</h1>', 'p', '<p>'],
		['/a', '/p', '/img']
	]}
	answers={['/h1', '<p>', '/p']}
/>
