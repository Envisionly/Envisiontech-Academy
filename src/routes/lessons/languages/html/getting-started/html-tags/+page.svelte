<script lang="ts">
	import ContentBlock from '$components/ContentBlock.svelte';
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
	content and what each piece of content represents. Tags are enclosed in angle brackets (&lt; and
	&gt;), and most tags come in pairs: an opening tag and a closing tag.
</p>

<p>Opening tags are always just a less than, the name of the tag and then a greater than like:</p>
<code>&lt;tagName&gt;</code>
<p>Closing tags are the same as opening tags, but with a / before the tag name Like:</p>
<code>&lt;/tagName&gt;</code>
