<script lang="ts">
	import { lessons } from '$utils/lessons';

	const { data } = $props();
	let lesson: any;

	if (data.sectionData?.courses[0].modules[0].lessons[0]) {
		lesson = data.sectionData.courses[0].modules[0].lessons[0];
	}
</script>

{#if lesson}
	<h1>{lesson.title}</h1>
	<p>Created on: {lesson.createdAt}</p>
	<p>Last updated: {lesson.updatedAt}</p>
{:else}
	<h1>Couldn't find that lesson!</h1>
{/if}
