<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		choices: string[];
		answer: string;
		answerList: string[];
		multiSelect?: boolean;
	};

	let { question, choices, answer, answerList, multiSelect = false }: PropsType = $props();

	let selectedAnswer: undefined | string = $state(undefined);
	let selectedAnswersList: string[] = $state([]);
	let correct: undefined | boolean = $state(undefined);
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
				<input
					type="checkbox"
					disabled={showAnswer || correct}
					bind:group={selectedAnswersList}
					value={choice}
				/>
				{choice}
			</label>
		{:else}
			<label>
				<input
					type="radio"
					disabled={showAnswer || correct}
					bind:group={selectedAnswer}
					value={choice}
				/>
				{choice}
			</label>
		{/if}
	{/each}
</fieldset>

{#snippet answerSnippet()}
	{#if multiSelect}
		<p>The correct answers are: {answerList.join(', ')}</p>
	{:else}
		<p>The correct answer is: {answer}</p>
	{/if}
{/snippet}

<AnswerHandler {correct} {showAnswer} answer={answerSnippet} {evaluateAnswer} />

<style>
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
</style>
