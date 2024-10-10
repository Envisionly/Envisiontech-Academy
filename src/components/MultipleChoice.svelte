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

<fieldset class="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
    <legend class="question text-xl font-mono font-semibold mb-4 text-gray-800">{question}</legend>
    {#each choices as choice}
        {#if multiSelect}
            <label class="choice flex items-center mb-2">
                <input
                    type="checkbox"
                    disabled={showAnswer || correct}
                    bind:group={selectedAnswersList}
                    value={choice}
                    class="mr-2"
                />
                <span class="font-mono text-base text-gray-700">{choice}</span>
            </label>
        {:else}
            <label class="choice flex items-center mb-2">
                <input
                    type="radio"
                    disabled={showAnswer || correct}
                    bind:group={selectedAnswer}
                    value={choice}
                    class="mr-2"
                />
                <span class="font-mono text-base text-gray-700">{choice}</span>
            </label>
        {/if}
    {/each}
</fieldset>

{#snippet answerSnippet()}
    {#if multiSelect && answerList}
        <p class="answer font-mono text-base text-gray-700 mt-4">The correct answers are: {printableAnswers}</p>
    {:else}
        <p class="answer font-mono text-base text-gray-700 mt-4">The correct answer is: {answer}</p>
    {/if}
{/snippet}

<AnswerHandler {correct} {showAnswer} answer={answerSnippet} {evaluateAnswer} />

<style>
    .question {
        font-size: 1.25rem; /* Tailwind CSS text-xl */
        font-family: monospace; /* Tailwind CSS font-mono */
        font-weight: 600; /* Tailwind CSS font-semibold */
        color: #1f2937; /* Tailwind CSS text-gray-800 */
        margin-bottom: 1rem; /* Tailwind CSS mb-4 */
    }

    .choice {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem; /* Tailwind CSS mb-2 */
    }

    .answer {
        font-size: 1rem; /* Tailwind CSS text-base */
        font-family: monospace; /* Tailwind CSS font-mono */
        color: #4b5563; /* Tailwind CSS text-gray-700 */
        margin-top: 1rem; /* Tailwind CSS mt-4 */
    }
</style>