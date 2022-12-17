<script lang="ts">
	type wordObject = {
		id: number;
		created_at: string;
		word: string;
	};

	import Card from '$lib/Card.svelte';
	/** @type {import('./$types').PageData} */
	export let data: { data: wordObject[] };
	const getRandomWord = (wordArray: wordObject[]) => {
		return wordArray[Math.floor(Math.random() * wordArray.length)].word;
	};

	let word: string;

	const getNewWord = () => {
		word = getRandomWord(data.data);
	};
</script>

<Card {word} />

<button on:click={getNewWord}>Nope</button>
<button on:click={getNewWord}>Yep</button>
<a href="/">Main Menu</a>
