<script>
	import CourseContent from '$components/content/CourseContent.svelte';
	import CourseDivider from '$components/content/CourseDivider.svelte';
	import CompleteTheSnippetMultipleChoice from '$components/content/interactive/CompleteTheSnippetMultipleChoice.svelte';
</script>

<svelte:head>
	<title>Headings</title>
	<meta name="description" content="Learn how to create headings in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Headings' },
			{
				type: 'paragraph',
				text: `Headings are used to define the structure of a web page. They are created using the
			<h1> to <h6> tags. The <h1> tag is the
			largest heading, and the <h6> tag is the smallest heading. Headings emphasize importance
			of your content and help users to understand the structure of your page.`
			},
			{
				type: 'paragraph',
				text: `Here's an example of headings:`
			},
			{
				type: 'snippet',
				text: [
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
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent content={[{ type: 'subHeading', text: 'Exercise' }]} />
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
</article>
