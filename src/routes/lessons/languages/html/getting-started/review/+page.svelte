<script lang="ts">
	import Matching from '$components/Matching.svelte';
	import CompleteTheSnippetMultipleChoice from '$components/CompleteTheSnippetMultipleChoice.svelte';
</script>

<svelte:head>
	<title>Review</title>
	<meta
		name="description"
		content="Review what you've learned in the Getting Started section of this free HTML course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2>Review</h2>
<p>Let's review what we've learned in the Getting Started section.</p>

<CompleteTheSnippetMultipleChoice
	question="Fill in the blanks to complete the code snippet"
	snippet={`<h1>My heading<___>
<p>My paragraph<___>`}
	choices={[
		['/h1', '/p'],
		['/a', '/p', '/img']
	]}
	answers={['/h1', '/p']}
/>

<Matching
	question="Match the element with it's description"
	choices={{
		list1: ['<h1>', '<p>', '<a>', '<img>'],
		list2: ['Defines a heading', 'Defines a paragraph', 'Defines a hyperlink', 'Defines an image']
	}}
/>
