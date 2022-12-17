<script lang="ts">
	import supabase from '$lib/db';

	async function getData() {
		const { data, error } = await supabase.from('words').select();
		if (error) throw new Error(error.message);
		console.log(data);
		return data;
	}
</script>

<div class="menu">
	<h1>My favorite games</h1>
	{#await getData()}
		<p>Fetching data...</p>
	{:then data}
		{#each data as word}
			<li>{word.word}</li>
		{/each}
	{:catch error}
		<p>Something went wrong while fetching the data:</p>
		<pre>{error}</pre>
	{/await}
	<a href="/game">Start a new game</a>
	<a href="/how-to-play">How to play</a>
	<a href="/about">About</a>
</div>

<style lang="scss">
	.menu {
		margin: 0 auto;
		text-align: center;
	}

	a {
		display: block;
		color: black;
		text-decoration: none;
		margin-bottom: 1rem;
	}
</style>
