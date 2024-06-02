<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		choices: string[];
		answer?: string;
		answerList?: string[];
		multiSelect?: boolean;
	};

	let { question, choices, answer, answerList, multiSelect = false }: PropsType = $props();

	let selectedAnswer: undefined | string = $state(undefined);
	let selectedAnswersList: string[] = $state([]);
	let correct: undefined | boolean = $state(undefined);
	let showAnswer = false;
	let printableAnswers: string | undefined = $state(undefined);

	// * This function evaluates the selected answer(s) and determines if they are correct
	const evaluateAnswer = () => {
		// * Check if the question is a multi-select question
		if (multiSelect && answerList) {
			//Checks if all of the correct answers have ben selected
			correct =
				selectedAnswersList.every((selected) => answerList.includes(selected)) &&
				answerList.every((correctAnswer: string) => selectedAnswersList.includes(correctAnswer));
		} else {
			correct = selectedAnswer === answer;
		}
	};

	//joins the answerList together with an and before the last item
	const generatePrintableAnswerString = () => {
		if (multiSelect && answerList) {
			if (answerList.length > 2) {
				printableAnswers = answerList.slice(0, -1).join(', ') + ', and ' + answerList.slice(-1);
			} else if (answerList.length === 2) {
				printableAnswers = answerList.join(' and ');
			} else {
				printableAnswers = answerList[0];
			}
		}
	};
	generatePrintableAnswerString();
</script>

<fieldset>
	<legend>{question}</legend>
	{#each choices as choice}
		{#if multiSelect}
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
	{#if multiSelect && answerList}
		<p>The correct answers are: {printableAnswers}</p>
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
