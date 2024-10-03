<script lang="ts">
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
	import CompleteTheSnippetMultipleChoice from '$components/CompleteTheSnippetMultipleChoice.svelte';
	import Matching from '$components/Matching.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Review</title>
	<meta
		name="description"
		content="Review what you've learned in the Getting Started section of this free HTML course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Review' },
			{
				type: 'paragraph',
				text: `Let's review what we've learned in the Getting Started section.`
			},
			{
				type: 'paragraph',
				text: `Here are some common HTML tags:`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent content={[{ type: 'subHeading', text: 'Question 1' }]} />

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

	<CourseDivider />

	<CourseContent content={[{ type: 'subHeading', text: 'Question 2' }]} />
	<Matching
		question="Match the element with it's description"
		choices={{
			list1: ['<h1>', '<p>', '<a>', '<img>'],
			list2: ['Defines a heading', 'Defines a paragraph', 'Defines a hyperlink', 'Defines an image']
		}}
	/>

	<CourseDivider />

	<CourseContent content={[{ type: 'subHeading', text: 'Question 3' }]} />
	<MultipleChoice
		question="What is a HTML element?"
		choices={[
			'A tag that defines the structure of a webpage',
			'A tag that defines the style of a webpage',
			'A tag that defines the behavior of a webpage'
		]}
		answer="A tag that defines the structure of a webpage"
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Congratulations!' },
			{
				type: 'paragraph',
				text: `Great job! You've completed the Getting Started section. You're now ready to move on to the next section.`
			}
		]}
	/>
</article>
