<script lang="ts">
	import CourseContent from '$components/content/CourseContent.svelte';
	import CourseDivider from '$components/content/CourseDivider.svelte';
	import MultipleChoice from '$components/content/interactive/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>HTML Tags</title>
	<meta
		name="description"
		content="Learn about the different HTML tags and how they're used in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'HTML Tags' },
			{
				type: 'paragraph',
				text: `HTML tags are the building blocks of a web page. They tell the web browser how to structure the content and what each piece of content represents. Tags are enclosed in angle brackets '<' and '>', and most tags come in pairs: an opening tag and a closing tag.`
			},
			{
				type: 'paragraph',
				text: `Opening tags are always just a  '<' the name of the tag and then a '>' like: <tagName>`
			},
			{
				type: 'paragraph',
				text: `Closing tags are the same as opening tags, but with a '/' before the tag name like: </tagName>`
			},
			{ type: 'paragraph', text: `Here are some common HTML tags:` },
			{
				type: 'list',
				text: [
					'<h1> to <h6> - Headings',
					'<p> - Paragraph',
					'<a> - Anchor (link)',
					'<img> - Image',
					'<ul> - Unordered List (bulleted list)',
					'<ol> - Ordered List (numbered list)',
					'<table> - Table'
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent content={[{ type: 'subHeading', text: 'Exercise' }]} />

	<MultipleChoice
		question="Which ones are opening tags?"
		choices={['<h1>', '</h1>', '</h2>', '</h1>', '<p>']}
		answerList={['<h1>', '<p>']}
		multiSelect={true}
	/>
</article>
