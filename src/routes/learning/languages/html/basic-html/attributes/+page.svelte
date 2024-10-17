<script>
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
</script>

<svelte:head>
	<title>HTML Attributes</title>
	<meta name="description" content="Learn how attributes work in HTML in this free course." />
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'HTML Attributes' },
			{
				type: 'description',
				text: `Attributes in HTML are used to provide additional information about an element. They are essentially an add-on to a tag that can be used to change the behavior or appearance of an element.`
			},
			{
				type: 'paragraph',
				text: `Attributes are added to an element by using the attribute name followed by an equals sign and then the value of the attribute in quotes. For example, to add a link to a webpage, you would use the anchor tag <a> and add an href attribute to specify the URL of the page you want to link to.`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Common Attributes' },
			{
				type: 'paragraph',
				text: `There are many attributes in HTML, some of the most common ones include:`
			},
			{
				type: 'list',
				text: [
					'href - used in anchor tags to specify the URL of the page the link goes to',
					'src - used in image tags to specify the URL of the image',
					'alt - used in image tags to provide a text description of the image',
					'class - used to apply a class to an element',
					'lang - used to state the language of a webpage',
					'id - used to give an element a unique identifier'
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Example' },
			{ type: 'paragraph', text: 'Here is an example of how an attribute would be coded:' },
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: '<a href="https://envisionly.com">Envisionly</a>'
					}
				]
			},
			{
				type: 'paragraph',
				text: 'What has happened here is we have added an attribute to the anchor tag that tells the browser where to go when the link is clicked.'
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Attributes and accessibility' },
			{
				type: 'paragraph',
				text: 'Attributes play a vital role in accessibility design. They can provide alternate text to an image which would highlight to screen-reader users what the image is representing on the current page.'
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Attributes in action' },
			{
				type: 'snippet',
				text: [
					{
						language: 'HTML',
						content: `
       <a href="https://www.envisionlytechacademy.com">Envisiontech Academy</a>

        <img src="https://envisiontech-academy.gumlet.io/resources/logo-short-nb.png" 
        width="150" height="150" alt="Envisiontech Academy Logo" />
`
					}
				]
			}
		]}
	/>
</article>
