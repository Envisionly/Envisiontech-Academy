<script lang="ts">
	/**
	 * CompleteTheSnippet is a Svelte component that renders a fill-in-the-blank question.
	 *
	 * @typedef {Object} Props
	 * @property {string} question - The question to be asked
	 * @property {string} snippet - The code snippet to be completed
	 * @property {string} answers - The list of correct answers
	 */
	/** @type {Props} */
	let { question, snippet, answers } = $$props;

	let parts = snippet.trim().split('___');
	let userAnswers = Array(parts.length - 1).fill('');
	let correct: undefined | boolean = undefined;
	let showAnswer: boolean = false;
	let correctSnippet: string;

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

<button on:click={evaluateAnswers} disabled={showAnswer || correct}>Check Answer</button>
<button on:click={() => (showAnswer = true)} disabled={showAnswer}>Show Answer</button>

<div aria-live="polite">
	{#if showAnswer}
		<pre><code>{correctSnippet}</code></pre>
	{:else if correct}
		<p style="color: green;">Correct!</p>
	{:else if !correct}
		<span style="color: red;">Incorrect!</span>
	{/if}
</div>

<style>
	input {
		display: inline;
	}

	pre {
		display: inline;
	}
</style>
