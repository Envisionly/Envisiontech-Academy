<script>
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
</script>

<svelte:head>
	<title>HTML Links</title>
	<meta name="description" content="Learn how links work in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'HTML Links' },
			{
				type: 'description',
				text: `Links are a fundamental part of the web. They are what allow us to navigate from one page to
    another. In HTML, links are created using the <span class="font-bold"><a> anchor </span> tag.`
			},
			{
				type: 'paragraph',
				text: `Links are a fundamental part of the web. They are what allow us to navigate from one page to
    another. In HTML, links are created using the <span class="font-bold"><a> anchor </span> tag.`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Example' },
			{ type: 'paragraph', text: 'Here is an example of how an anker tag would be coded:' },
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `
<a href="https://www.google.com">This way to Google!</a>`
					}
				]
			}
		]}
	/>

	<CourseContent
		content={[
			{
				type: 'paragraph',
				text: `In this example, we have created a link to Google. The <span class="font-bold">href</span> attribute specifies the URL of the page we want to link to, and the text between the opening and closing <span class="font-bold"><a></span> tags is the text that will be displayed on the page.`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Internal Links' },
			{
				type: 'paragraph',
				text: `Internal links are links that point to another part of the same webpage. They are useful for creating a table of contents or for jumping to a specific section of a page.`
			},
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `
<a href="#header">Jump to the header</a>
`
					}
				]
			}
		]}
	/>
</article>
