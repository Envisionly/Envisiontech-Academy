<script lang="ts">
	import AnswerHandler from './AnswerHandler.svelte';

	type PropsType = {
		question: string;
		choices: { list1: string[]; list2: string[] };
	};

	let { question, choices }: PropsType = $props();
	//Randomises the order of list2
	let tempMatchList: string[] = shuffle(choices.list2);
	let userAnswers: string[] = $state(Array(choices.list2.length).fill(''));
	let currentPosition: number = $state(0);

	$effect(() => console.log(currentPosition));

	// * This function shuffles the array using the Fisher-Yates algorithm
	function shuffle(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
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
			>
				<span class="firstColumn">{i + 1}. {choice}</span>
				<span class="answerColumn">{userAnswers[i]}</span>
			</div>
		{/each}
	</div>
	<div id="optionList">
		{#each tempMatchList as choice}
			<button
				hidden={userAnswers.includes(choice)}
				onclick={() => {
					userAnswers[currentPosition] = choice;
					currentPosition = (currentPosition + 1) % choices.list1.length;
				}}
			>
				{choice}
			</button>
		{/each}
	</div>
</fieldset>

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
