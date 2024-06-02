<script lang="ts">
	import MultipleChoice from '$components/MultipleChoice.svelte';
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
	HTML tags are the building blocks of a web page. They tell the web browser how to structure the
	content and what each piece of content represents. Tags are enclosed in angle brackets &lt; and
	&gt;, and most tags come in pairs: an opening tag and a closing tag.
</p>

<p>
	Opening tags are always just a less than, the name of the tag and then a greater than like: <code
		>&lt;tagName&gt;</code
	>
</p>
<p>
	Closing tags are the same as opening tags, but with a / before the tag name like: <code
		>&lt;/tagName&gt;</code
	>
</p>

<p>Here are some common HTML tags:</p>

<ul>
	<li>
		<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings
	</li>
	<li>
		<code>&lt;p&gt;</code> - Paragraph
	</li>
	<li>
		<code>&lt;a&gt;</code> - Anchor (link)
	</li>
	<li>
		<code>&lt;img&gt;</code> - Image
	</li>
	<li>
		<code>&lt;ul&gt;</code> - Unordered List (bulleted list)
	</li>
	<li>
		<code>&lt;ol&gt;</code> - Ordered List (numbered list)
	</li>
	<li>
		<code>&lt;table&gt;</code> - Table
	</li>
</ul>

<h2>Exercise</h2>

<MultipleChoice
	question="Which ones are opening tags?"
	choices={['<h1>', '</h1>', '</h2>', '</h1>', '<p>']}
	answerList={['<h1>', '<p>']}
	multiSelect={true}
/>
