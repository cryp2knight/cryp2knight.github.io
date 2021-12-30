<script>
	import NavBar from "../src/components/NavBar.svelte";
	import TheFooter from "../src/components/TheFooter.svelte";
	import Intro from "../src/components/Intro.svelte";
	import Blogs from "./Blogs.svelte";
</script>

<NavBar />
<main>
	<Intro />
	<Blogs />
</main>
<TheFooter />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
