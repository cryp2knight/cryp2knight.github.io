<script>
	import { TITLE } from '../constants';
	import Intro from '../components/Intro.svelte';
</script>

<section>
	<header><h1>{TITLE}</h1></header>
	<nav>
		<a href="#projects">PROJECTS</a>
		<a href="#blogs">BLOGS</a>
	</nav>
	<Intro />
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	header {
		margin: 0;
		padding: 4rem;
		background: url('me_practice_biking.jpg');
		background-position: center;
		background-size: cover;
		background-color: #ce931e;
		color: #fff;
		text-shadow: 2px 2px 3px #000;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	nav > * {
		padding: 2rem;
	}
</style>
