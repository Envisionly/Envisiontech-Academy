<script lang="ts">
	import Matching from '$components/Matching.svelte';
</script>

<h2>Review</h2>
<p>Let's review what we've learned in the Getting Started section.</p>

<Matching
	question="Match the element with it's description"
	choices={{
		list1: ['<h1>', '<p>', '<a>', '<img>'],
		list2: ['Defines a paragraph', 'Defines a hyperlink', 'Defines a heading', 'Defines an image']
	}}
/>
