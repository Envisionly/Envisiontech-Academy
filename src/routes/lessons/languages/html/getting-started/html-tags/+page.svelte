<script lang="ts">
	import ContentBlock from '../../../../ContentBlock.svelte';
</script>

<svelte:head>
	<title>HTML Tags</title>
	<meta
		name="description"
		content="Learn about the different HTML tags and how they're used in this free course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2>HTML Tags</h2>
<p>
	HTML tags are the building blocks of a web page. They tell the web browser how to display the
	content. Each tag has a specific purpose, like creating headings, paragraphs, lists, and links.
</p>

<h2>Common HTML Tags</h2>
<ul>
	<li>
		<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings are used to define the importance
		of text. <code>&lt;h1&gt;</code> is the most important, and <code>&lt;h6&gt;</code> is the least.
	</li>
	<li>
		<code>&lt;p&gt;</code>: Paragraphs are used to group text together.
	</li>
	<li>
		<code>&lt;a&gt;</code>: Links are used to navigate to other web pages.
	</li>
	<li>
		<code>&lt;img&gt;</code>: Images are used to display pictures on a web page.
	</li>
	<li>
		<code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>: Lists are used to group items together.
	</li>
</ul>

<ContentBlock
	name="HTML Tags Example"
	blockType="Code Snippet"
	contentList={[
		{
			content: `
<h1>Welcome to My Web Page</h1>
<p>This is a paragraph of text.</p>
<a href="https://www.example.com">Click here to visit Example.com</a>
<img src="image.jpg" alt="A picture of something" />
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
			`,
			language: 'HTML'
		}
	]}
/>
