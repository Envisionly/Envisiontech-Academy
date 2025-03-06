<script lang="ts">
	import LessonControls from '$components/content/LessonControls.svelte';
	import { currentSection } from '$stores/sectionManager';
	const { data, children } = $props();

	$effect(() => {
		if (data.section?.slug != $currentSection?.slug) {
			if (
				data.section?.courses?.[0]?.slug != $currentSection?.courses?.[0]?.slug ||
				!$currentSection
			) {
				if (data.section) {
					currentSection.setSection(data.section);
				}
			}
		}
	});
</script>

<aside><LessonControls /></aside>
<div id="course">
	{@render children()}
</div>

<aside class="screenReaderOnly"><LessonControls /></aside>
