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

<button onclick={evaluateAnswer} disabled={showAnswer || correct}>Check Answer</button>
<button onclick={() => (showAnswer = !showAnswer)}
	>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button
>

<div aria-live="polite">
	{#if showAnswer}
		{@render answer()}
	{:else if correct}
		<p style="color: green;">Correct!</p>
	{:else if correct === false}
		<p style="color: red;">Incorrect</p>
	{/if}
</div>
