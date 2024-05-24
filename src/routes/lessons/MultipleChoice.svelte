<script lang="ts">
	/**
	 * MultipleChoice is a Svelte component that renders a multiple choice question.
	 * It supports both single answer and multiple answer questions.
	 *
	 * @typedef {Object} Props
	 * @property {string} question - The question to be asked
	 * @property {string[]} choices - The possible answers to the question
	 * @property {string} answer - The correct answer (for single choice questions)
	 * @property {string[]} answerList - The correct answers (for multi-choice questions)
	 * @property {boolean} [multiSelect=false] - Whether multiple answers can be selected
	 */

	/** @type {Props} */
	let { question, choices, answer, answerList, multiSelect = false } = $$props;

	let selectedAnswer: undefined | string = undefined;
	let selectedAnswersList: string[] = [];
	let correct: undefined | boolean = undefined;
	let showAnswer = false;

	// * This function evaluates the selected answer(s) and determines if they are correct
	const evaluateAnswer = () => {
		// * Check if the question is a multi-select question
		if (multiSelect) {
			//Checks if all of the correct answers have ben selected
			correct =
				selectedAnswersList.every((selected) => answerList.includes(selected)) &&
				answerList.every((correctAnswer: string) => selectedAnswersList.includes(correctAnswer));
		} else {
			correct = selectedAnswer === answer;
		}
	};
</script>

<fieldset>
	<legend>{question}</legend>
	{#each choices as choice}
		{#if multiSelect === true}
			<label>
				<input type="checkbox" bind:group={selectedAnswersList} value={choice} />
				{choice}
			</label>
		{:else}
			<label>
				<input type="radio" bind:group={selectedAnswer} value={choice} />
				{choice}
			</label>
		{/if}
	{/each}
</fieldset>
<button
	on:click={evaluateAnswer}
	disabled={(selectedAnswer === undefined && selectedAnswersList.length < 1) ||
		correct !== undefined ||
		showAnswer === true}
>
	Check Answer
</button>
<button on:click={() => (showAnswer = true)} disabled={correct === true || showAnswer === true}
	>Show Answer</button
>

<p aria-live="polite">
	{#if correct === true}
		<span style="color: green;">Correct!</span>
	{:else if showAnswer === true}
		{#if multiSelect === true}
			The correct answers are: {answerList.join(', ')}
		{:else}
			The correct answer is: {answer}
		{/if}
	{:else if correct === false}
		<span style="color: red;">Incorrect!</span>
	{/if}
</p>

<style>
	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	button {
		margin-top: 1rem;
	}
</style>
