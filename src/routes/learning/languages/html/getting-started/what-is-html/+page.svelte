<script lang="ts">
	import CourseContent from '$components/CourseContent.svelte';
	import CourseDivider from '$components/CourseDivider.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>What is HTML</title>
	<meta
		name="description"
		content="Learn about what HTML actually is and what it's used for in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<article class="flex flex-col gap-6 px-8 py-4 md:gap-9 md:px-12 md:py-6 xl:gap-12 xl:px-16 xl:py-8">
	<CourseContent
		content={[
			{ type: 'heading', text: 'What is HTML?' },
			{
				type: 'description',
				text: "Imagine HTML (HyperText Markup Language) as the blueprint for a web page. It tells the web browser how to structure the content, like headings, paragraphs, images, and links. It's like using Legos to build the basic framework of a house."
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'What does HTML do?' },
			{
				type: 'list',
				text: [
					{
						item: 'Defines Structure: HTML breaks down the content into sections like headings, paragraphs, lists, and tables.',
						icon: 'list-tree',
						iconDescription: 'Tree'
					},
					{
						item: 'Creates Hyperlinks: HTML allows you to create clickable links that lead users to other web pages or sections of the same page.',
						icon: 'link',
						iconDescription: 'Link'
					},
					{
						item: 'Embeds Images and Videos: HTML provides a way to insert images and videos into your web page.',
						icon: 'photo-film-music',
						iconDescription: 'Photo, Film, Music'
					}
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: "What HTML doesn't do:" },
			{
				type: 'list',
				text: [
					{
						item: "Make the page colorful or stylish: That's the job of Cascading Style Sheets (CSS), which you'll learn about later.",
						icon: 'paint-brush',
						iconDescription: 'Paint Brush'
					},
					{
						item: "Add interactivity: For making things clickable or dynamic, you'll need JavaScript which you will also learn about later.",
						icon: 'mouse-pointer',
						iconDescription: 'Mouse Pointer'
					}
				]
			}
		]}
	/>

	<CourseDivider />

	<CourseContent
		content={[
			{ type: 'subHeading', text: 'Why is HTML important?' },
			{
				type: 'list',
				text: [
					{
						item: 'Foundation for Web Pages: HTML is the essential building block for every web page you see online.',
						icon: 'building',
						iconDescription: 'Building'
					},
					{
						item: "Easy to Learn: HTML uses a simple tag system that's beginner-friendly.",
						icon: 'graduation-cap',
						iconDescription: 'Graduation Cap'
					},
					{
						item: "Learning HTML is like learning the basic vocabulary for building websites. It's the first step to creating amazing things online!",
						icon: 'book',
						iconDescription: 'Book'
					}
				]
			}
		]}
	/>

	<CourseDivider />

	<section>
		<CourseContent content={[{ type: 'subHeading', text: 'Quiz Time!' }]} />

		<MultipleChoice
			question="What is HTML used for?"
			choices={['Creating web pages', 'Making web pages look nice', 'Making web pages interactive']}
			answer="Creating web pages"
		/>
	</section>
</article>
