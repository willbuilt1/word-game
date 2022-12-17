<div class="container">
	<nav>
		<h1>GuessWord</h1>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		Made by <a href="https://github.com/willbuilt">Will</a>
	</footer>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-rows: 100px 1fr 100px;
		height: 100vh;
	}
	nav,
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
