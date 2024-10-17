<script>
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
</script>

<svelte:head>
	<title>HTML Page Structure</title>
	<meta name="description" content="Learn how to structure pages in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Structuring a HTML Page' },
			{
				type: 'paragraph',
				text: `It is good practice to structure your HTML documents in a way that makes them easy to read and understand. Whether it's other users or your future self, you'll thank yourself for following these guidelines.`
			},
			{ type: 'paragraph', text: `Here's an example of a well-structured HTML document:` }
		]}
	/>

	<CourseContent
		content={[
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `<!DOCTYPE HTML>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h2>Page content</h2>
        <p>More content</p>
    </body>
</html>`
					}
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'heading', text: 'Here is a breakdown of what each tag means:' },
			{
				type: 'paragraph',
				text: `<span class="font-bold">!DOCTYPE HTML</span> declares that the page created is a HTML document`
			},
			{
				type: 'paragraph',
				text: `<span class="font-bold">&lt;html&gt;</span> demonstrates where all HTML code should be (this will be more useful later!)`
			},
			{
				type: 'paragraph',
				text: `<span class="font-bold">&lt;head&gt;</span> is where all metadata is placed (the data, about the data!)`
			},
			{
				type: 'paragraph',
				text: `<span class="font-bold">&lt;title&gt;</span> defines the title of the current page`
			},
			{
				type: 'paragraph',
				text: `<span class="font-bold">&lt;body&gt;</span> contains all the content on the page the user will be interacting and browsing.`
			},
			{
				type: 'paragraph',
				text: `<span class="italic text-gray-700">Note: indentation does not really matter with HTML, but it is good practice!</span>`
			}
		]}
	/>
</article>
