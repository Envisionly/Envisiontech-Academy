<script lang="ts">
	export let content: Array<{
		type: 'heading' | 'subHeading' | 'description' | 'paragraph' | 'list';
		text: string | Array<string> | Array<{ item: string; icon: string; iconDescription: string }>;
	}>;
</script>

<section>
	{#each content as { type, text }}
		{#if type === 'heading'}
			<h1
				class="mb-2 border-b border-envisionlyGold pb-2 text-xl font-semibold uppercase text-envisionlyBlue sm:text-2xl"
			>
				{text}
			</h1>
		{:else if type === 'subHeading'}
			<h2 class="text-lg font-semibold uppercase text-gray-700">{text}</h2>
		{:else if type === 'description'}
			<p class="text-lg font-medium">{text}</p>
		{:else if type === 'paragraph'}
			{#if typeof text === 'string'}
				<p class="pl-2 text-gray-500">{text}</p>
			{:else}
				{#each text as paragraph}
					<p class="pl-2 text-gray-500">{paragraph}</p>
				{/each}
			{/if}
		{:else if type === 'list'}
			<ul class="pl-2 text-gray-500">
				{#each text as item}
					<li class="flex gap-2">
						{#if typeof item === 'object'}
							<span class="fa-light fa-{item.icon}" aria-label={item.iconDescription}></span>
							<span>{item.item}</span>
						{:else}
							<span class="fa-light fa-arrow - right" aria-label="Right Arrow"></span>

							<span>{item}</span>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</section>
