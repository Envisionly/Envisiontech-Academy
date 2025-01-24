<script lang="ts">
	import CourseContent from '$components/content/CourseContent.svelte';
	import CourseDivider from '$components/content/CourseDivider.svelte';
</script>

<svelte:head>
	<title>HTML Comments</title>
	<meta
		name="description"
		content="Learn how to add comments to your HTML code in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'HTML Comments' },
			{
				type: 'description',
				text: `Comments in HTML are used to add notes to your code that are not displayed in the web browser. They are useful for documenting your code, making notes to yourself or other developers, or temporarily removing code without deleting it.`
			},
			{
				type: 'paragraph',
				text: `Comments in HTML are written using the <!-- and --> tags. Anything between these tags is considered a comment and will not be displayed in the browser.`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Example' },
			{ type: 'paragraph', text: 'Here is an example of how a comment would be coded:' },
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `<!-- This is a comment -->`
					}
				]
			}
		]}
	/>
</article>
