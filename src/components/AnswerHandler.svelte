<script lang="ts">
	import { type Snippet } from 'svelte';

	type PropsType = {
		correct: boolean | undefined;
		showAnswer: boolean;
		answer: Snippet;
		evaluateAnswer: () => void;
	};

	let { correct, showAnswer, answer, evaluateAnswer }: PropsType = $props();
</script>

<div class="flex space-x-4">
    <button
        class="w-32 h-16 px-4 py-2 bg-envisionlyBlue text-white rounded-md hover:bg-envisionlyLightBlue focus:bg-envisionlyLightBlue active:bg-envisionlyLightBlue disabled:bg-envisionlyTransparentBlue disabled:cursor-not-allowed transition duration-200"
        onclick={evaluateAnswer}
        disabled={showAnswer || correct}
    >
        Check Answer
    </button>
    <button
        class="w-32 h-16 px-4 py-2 bg-envisionlyGold text-white rounded-md hover:bg-envisionlyTransparentGold focus:bg-envisionlyTransparentGold active:bg-envisionlyTransparentGold transition duration-200"
        onclick={() => (showAnswer = !showAnswer)}
    >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
    </button>
</div>
<div aria-live="polite">
	{#if showAnswer}
		{@render answer()}
	{:else if correct}
		<p style="color: green;" class="font-bold">Correct!</p>
	{:else if correct === false}
		<p style="color: red;" class="font-bold">Incorrect</p>
	{/if}
</div>
