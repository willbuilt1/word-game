<script lang="ts">
	export let word = 'Start game';
</script>

<div class="card">
	{word}
</div>

<style lang="scss">
	div {
		background-color: $red;
	}

	.card {
		margin: 0 auto;
		border: solid 5px black;
		border-radius: 10px;
		width: 60%;
		text-align: center;
		padding: 4rem 0;
		font-size: 5rem;
	}
</style>
