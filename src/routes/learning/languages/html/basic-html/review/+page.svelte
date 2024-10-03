<script lang="ts">
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Paragraphs</title>
	<meta name="description" content="Learn how to create paragraphs in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Paragraphs' },
			{
				type: 'description',
				text: `Paragraphs are used to group text together. They are created using the <code>&lt;p&gt;</code> tag.`
			},
			{ type: 'paragraph', text: `Here's an example of a paragraph:` }
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Paragraph Example' },
			{ type: 'snippet', text: [{ language: 'HTML', content: `<p>This is a paragraph.</p>` }] }
		]}
	/>

	<CourseDivider />

	<CourseContent content={[{ type: 'heading', text: 'Exercise' }]} />

	<MultipleChoice
		question="What tag is used to create a paragraph?"
		choices={['<h1>', '<p>', '<a>', '<img>']}
		answer="<p>"
	/>
</article>
