<script lang="ts">
	import CompleteTheSnippetMultipleChoice from '$components/CompleteTheSnippetMultipleChoice.svelte';
	import Matching from '$components/Matching.svelte';
	import MultipleChoice from '$components/MultipleChoice.svelte';
</script>

<svelte:head>
	<title>Review</title>
	<meta
		name="description"
		content="Review what you've learned in the Getting Started section of this free HTML course."
	/>
	<meta name="author" content="Paul Geoghegan" />
</svelte:head>

<h2 class="text-xl font-bold">Review</h2>
<p>Let's review what we've learned in the Getting Started section.</p>
<br>
<h3 class="underline font-bold text-md">Question One</h3>
<CompleteTheSnippetMultipleChoice
	question="Fill in the blanks to complete the code snippet"
	snippet={`<h1>My heading<___>
___My paragraph<___>`}
	choices={[
		['/h1', 'img', '/p'],
		['<h2>', '</h1>', 'p', '<p>'],
		['/a', '/p', '/img']
	]}
	answers={['/h1', '<p>', '/p']}
/><br>
<h3 class="underline font-bold text-md">Question Two</h3>
<Matching
	question="Match the element with it's description"
	choices={{
		list1: ['<h1>', '<p>', '<a>', '<img>'],
		list2: ['Defines a heading', 'Defines a paragraph', 'Defines a hyperlink', 'Defines an image']
	}}
/>
<br>
<h3 class="underline font-bold text-md">Question Three</h3>
<MultipleChoice
	question="What is a HTML element?"
	choices={[
		'A tag that defines the structure of a webpage',
		'A tag that defines the style of a webpage',
		'A tag that defines the behavior of a webpage'
	]}
	answer="A tag that defines the structure of a webpage"
/>

<p>
	Great job! You've completed the Getting Started section. You're now ready to move on to the next
	section.
</p>
