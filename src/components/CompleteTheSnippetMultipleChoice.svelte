<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		snippet: string;
		choices: string[][];
		answers: string[];
	};

	let { question, snippet, choices, answers }: PropsType = $props();

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

<fieldset class="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
	<legend class="question text-xl font-mono font-semibold mb-4 text-gray-800">{question}</legend>
	{#each parts as part, i}
		{#if i < parts.length - 1}
			<pre><code
					>{part}<select 
						aria-label={`Answer ${i + 1}`}
						disabled={showAnswer || correct}
						bind:value={userAnswers[i]}>
						{#each choices[i] as choice}
							<option value={choice}>{choice}</option>
						{/each}
</select></code
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
	select {
		display: inline;
	}

	pre {
		display: inline;
	}
</style>
