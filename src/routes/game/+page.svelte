<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/Card.svelte';

	export let data: PageData;
	let word: string;

	const getRandomWord = (wordArray: string[]) => {
		return wordArray[Math.floor(Math.random() * wordArray.length)];
	};

	const getNewWord = () => {
		word = getRandomWord(data.words);
		console.log(data);
	};
</script>

<Card {word} />

<button on:click={getNewWord}>Nope</button>
<button on:click={getNewWord}>Yep</button>
<a href="/">Main Menu</a>
