<script lang="ts">
	// * This is a reusable component that can be used to display code snippets
	/**
	 * ContentBlock is a Svelte component that displays code snippets.
	 * It supports multiple languages and allows the user to select which language to display.
	 *
	 * @typedef {Object} Props
	 * @property {string} name - The name of the content block (displayed as a heading above the content block)
	 * @property {string} blockType - The type of the content block (default: 'Code Snippet')
	 * @property {Object[]} contentList - The content to be displayed, each object should have a `language` and `content` property
	 */

	/** @type {Props} */
	let { name, blockType = 'Code Snippet', contentList } = $$props;
	let contentSelected = 0;
</script>

<h2>{name}</h2>
<div class="contentSection">
	<fieldset aria-label="Content Controls">
		{#each contentList as content, index}
			<input
				type="radio"
				name="contentBlockControls"
				id={content.language}
				value={index}
				checked={contentSelected === index}
				bind:group={contentSelected}
			/>
			<label for={content.language}>{content.language}</label>
		{/each}
		<input
			type="radio"
			name="contentBlockControls"
			id="previewBlock"
			value={contentList.length}
			checked={contentSelected === 1}
			bind:group={contentSelected}
		/>
		<label for="previewBlock">Preview</label>
	</fieldset>
	{#each contentList as content, index}
		{#if contentSelected == index}
			<section class="contentBlock" aria-label={content.language}>
				<pre><code class="code">{content.content.trim('\n')}</code></pre>
			</section>
		{/if}
	{/each}
	{#if contentSelected == contentList.length}
		<div class="contentBlock" aria-roledescription="Preview">
			{@html contentList[0].content}
		</div>
	{/if}
</div>
