<script lang="ts">
	import ContentBlock from '$components/ContentBlock.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
	import CompleteTheSnippetWithText from '$components/CompleteTheSnippetWithText.svelte';
</script>

<svelte:head>
	<title>What is HTML</title>
	<meta
		name="description"
		content="Learn about what HTML actually is and what it's used for in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<CompleteTheSnippetWithText
	question="HTML Tags"
	snippet={`
<h1>My heading___
___My paragraph.</p>
`}
	answers={['</h1>', '<p>']}
/>

<h2>What is HTML?</h2>
<p>
	Imagine HTML (HyperText Markup Language) as the blueprint for a web page. It tells the web browser
	how to structure the content, like headings, paragraphs, images, and links. It's like using Legos
	to build the basic framework of a house.
</p>
<h2>What does HTML do?</h2>
<ul>
	<li>
		Defines Structure: HTML breaks down the content into sections like headings, paragraphs, lists,
		and tables.
	</li>
	<li>
		Creates Hyperlinks: HTML allows you to create clickable links that lead users to other web pages
		or sections of the same page.
	</li>
	<li>
		Embeds Images and Videos: HTML provides a way to insert images and videos into your web page.
	</li>
</ul>
<h2>What HTML doesn't do:</h2>
<ul>
	<li>
		Make the page colorful or stylish: That's the job of Cascading Style Sheets (CSS), which you'll
		learn about later.
	</li>
	<li>
		Add interactivity: For making things clickable or dynamic, you'll need JavaScript which you will
		also learn about later.
	</li>
</ul>
<h2>Why is HTML important?</h2>
<ul>
	<li>
		Foundation for Web Pages: HTML is the essential building block for every web page you see
		online.
	</li>
	<li>Easy to Learn: HTML uses a simple tag system that's beginner-friendly.</li>
	<li>
		Learning HTML is like learning the basic vocabulary for building websites. It's the first step
		to creating amazing things online!
	</li>
</ul>
<ContentBlock
	name="Basic HTML example"
	blockType="Code Snippet"
	contentList={[
		{
			language: 'HTML',
			content: `
<h1>My First Heading</h1>
<p>My first paragraph.</p>
`
		}
	]}
/>
