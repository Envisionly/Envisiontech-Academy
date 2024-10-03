<script lang="ts">
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
</script>

<svelte:head>
	<title>Basic HTML Portfolio Project</title>
	<meta
		name="description"
		content="Learn how to create a basic HTML project in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'Basic HTML Portfolio Project' },
			{
				type: 'paragraph',
				text: `In this project, you will create a basic portfolio website using HTML. This project will help you practice your HTML skills and create a simple website that showcases your work.`
			},
			{
				type: 'paragraph',
				text: `To complete this project, you will need to create the following pages:`
			},
			{
				type: 'list',
				text: [
					{
						item: 'Home Page',
						icon: 'home',
						iconDescription: 'Home'
					},
					{
						item: 'About Page',
						icon: 'info-circle',
						iconDescription: 'Information'
					},
					{
						item: 'Portfolio Page',
						icon: 'briefcase',
						iconDescription: 'Portfolio'
					},
					{
						item: 'Contact Page',
						icon: 'envelope',
						iconDescription: 'Contact'
					}
				]
			},
			{
				type: 'paragraph',
				text: `You can use the knowledge you have gained from the previous lessons to create these pages. Be creative and have fun with this project!`
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Project Requirements:' },
			{
				type: 'list',
				text: [
					{
						item: 'Create a home page that includes a welcome message and a brief introduction to yourself.',
						icon: 'home',
						iconDescription: 'Home'
					},
					{
						item: 'Create an about page that includes information about yourself, your skills, and your interests.',
						icon: 'info-circle',
						iconDescription: 'Information'
					},
					{
						item: 'Create a portfolio page that showcases your work. Include images, descriptions, and links to your projects.',
						icon: 'briefcase',
						iconDescription: 'Portfolio'
					},
					{
						item: 'Create a contact page that includes a contact form with fields for name, email, and message.',
						icon: 'envelope',
						iconDescription: 'Contact'
					},
					{
						item: 'Add a navigation menu to each page that links to the other pages on your website.',
						icon: 'bars',
						iconDescription: 'Menu'
					}
				]
			},
			{
				type: 'paragraph',
				text: `Once you have completed the project, you can deploy it to a hosting service or share it with friends and family. This project will help you practice your HTML skills and create a simple website that showcases your work.`
			}
		]}
	/>
</article>
