<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		snippet: string;
		answers: string[];
	};

	let { question, snippet, answers }: PropsType = $props();

	let parts = snippet.trim().split('___');
	let userAnswers = Array(parts.length - 1).fill('');
	let correct: undefined | boolean = $state(undefined);
	let showAnswer: boolean = false;
	let correctSnippet: string = $state('');

	const evaluateAnswers = () => {
		correct = answers.every((answer: string, i: number) => answer.trim() === userAnswers[i].trim());
	};

	const getCorrectSnippet = () => {
		correctSnippet = '';
		for (let i = 0; i < parts.length; i++) {
			correctSnippet += parts[i];
			if (i < parts.length - 1) {
				correctSnippet += answers[i];
			}
		}
	};
	getCorrectSnippet();
</script>

<fieldset>
	<legend>{question}</legend>
	{#each parts as part, i}
		{#if i < parts.length - 1}
			<pre><code
					>{part}<input
						type="text"
						aria-label={`Answer ${i + 1}`}
						disabled={showAnswer || correct}
						bind:value={userAnswers[i]}
					/></code
				></pre>
		{:else}
			<pre><code>{part}</code></pre>
		{/if}
	{/each}
</fieldset>

{#snippet answer()}
	<pre><code>{correctSnippet}</code></pre>
{/snippet}

<AnswerHandler {correct} {showAnswer} {answer} evaluateAnswer={evaluateAnswers} />

<style>
	input {
		display: inline;
	}

	pre {
		display: inline;
	}
</style>
