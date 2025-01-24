<script>
	import CourseContent from '$components/content/CourseContent.svelte';
	import CourseDivider from '$components/content/CourseDivider.svelte';
</script>

<svelte:head>
	<title>Images</title>
	<meta name="description" content="Learn how to utilize in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'HTML Images' },
			{
				type: 'paragraph',
				text: `Images are a great way to make your website more visually appealing. They can be used to break up text, illustrate a point, or simply to make your website look more interesting.`
			},
			{
				type: 'paragraph',
				text: `To add an image to your website, you need to use the <code>&lt;img&gt;</code> tag. This tag is an empty tag, which means it does not have a closing tag. Instead, you add attributes to the tag to specify the image you want to display.`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Example:' },
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `<img src="https://envisiontech-academy.gumlet.io/resources/logo-short-nb.png" alt="Envisiontech Academy Logo" width="150" height="150">`
					}
				]
			}
		]}
	/>

	<CourseContent
		content={[
			{
				type: 'paragraph',
				text: `In this example, we have added an image to the page. The <code>data-src</code> attribute
                specifies the URL of the image, while the <code>alt</code> attribute provides a text description
                of the image. The <code>width</code> and <code>height</code> attributes specify the dimensions of
                the image.`
			}
		]}
	/>
</article>
