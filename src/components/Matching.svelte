<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		choices: { list1: string[]; list2: string[] };
	};

	let { question, choices }: PropsType = $props();
	//Randomizes the order of list2
	let tempMatchList: string[] = $state(shuffle(choices.list2));
	let userAnswers: string[] = $state(Array(choices.list2.length).fill(''));
	let currentPosition: number = $state(0);
	let correct: boolean | undefined = $state(undefined);
	let showAnswer = false;

	// * This function shuffles the array using the Fisher-Yates algorithm
	function shuffle(array: any[]) {
		let tempArray = JSON.parse(JSON.stringify(array));
		for (let i = tempArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
		}
		return tempArray;
	}

	const getNextBlankPosition = () => {
		const nextBlankPosition = userAnswers.indexOf('');
		return nextBlankPosition === -1 ? userAnswers.length - 1 : nextBlankPosition;
	};

	const evaluateAnswer = () => {
		correct = choices.list2.every((answer, i) => answer === userAnswers[i]);
	};
</script>

<fieldset>
	<legend>{question}</legend>
	<div id="matchList">
		{#each choices.list1 as choice, i}
			<div
				onclick={() => {
					currentPosition = i;
					if (userAnswers[i] !== '') {
						userAnswers[i] = '';
					}
				}}
				onkeydown={(event) => {
					if (event.key === 'Enter') {
						currentPosition = i;
						if (userAnswers[i] !== '') {
							userAnswers[i] = '';
						}
					}
				}}
				class="gridRow"
				role="button"
				tabindex="0"
				aria-current={i === currentPosition}
				ondragover={(event) => {
					event.preventDefault(); // Necessary to allow drop
				}}
				ondrop={(event:DragEvent) => {
					event.preventDefault();
					if (event.dataTransfer) {
						const { value, originalIndex } = JSON.parse(event.dataTransfer.getData('application/json'));
						if(originalIndex > -1) {
							userAnswers[originalIndex] = userAnswers[i];
						}
						userAnswers[i] = value;
						currentPosition = getNextBlankPosition();
					}
				}}
			>
				<span class="firstColumn">{i + 1}. {choice}</span>
				<span
					class="answerColumn"
					role="button"
					aria-roledescription="Your Answer"
					aria-hidden={userAnswers[i] === ''}
					tabindex={userAnswers[i] === '' ? -1 : 0}
					draggable="true"
					ondragstart={(event) => {
						if (event.dataTransfer) {
							event.dataTransfer.setData(
								'application/json',
								JSON.stringify({ value: userAnswers[i], originalIndex: i })
							);
							userAnswers[i] = '';
						}
					}}>{userAnswers[i]}</span
				>
			</div>
		{/each}
	</div>
	<section id="optionList" aria-label="Options List">
		{#each tempMatchList as choice}
			<button
				hidden={userAnswers.includes(choice)}
				onclick={() => {
					userAnswers[currentPosition] = choice;
					currentPosition = getNextBlankPosition();
				}}
				draggable="true"
				ondragstart={(event) => {
					if (event.dataTransfer) {
						event.dataTransfer.setData(
							'application/json',
							JSON.stringify({ value: choice, originalIndex: -1 })
						);
					}
				}}
			>
				{choice}
			</button>
		{/each}
	</section>
</fieldset>

{#snippet answerSnippet()}
	<p>The correct answers are:</p>
	<ol>
		{#each choices.list1 as choice, i}
			<li>{choice}: {choices.list2[i]}</li>
		{/each}
	</ol>
{/snippet}

<AnswerHandler {correct} {showAnswer} answer={answerSnippet} {evaluateAnswer} />

<style>
	#matchList {
		display: flex;
		flex-direction: column;
	}

	.gridRow {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.firstColumn {
		padding: 0.5rem;
	}

	.answerColumn {
		padding: 0.5rem;
		min-width: 1rem;
		min-height: 1rem;
		border: 1px solid black;
	}
</style>
