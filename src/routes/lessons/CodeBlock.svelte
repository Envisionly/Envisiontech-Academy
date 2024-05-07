<script lang="ts">
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
			<p>Preview</p>
		</div>
	{/if}
</div>
