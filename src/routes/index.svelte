<script context="module">
	import Parser from 'rss-parser';
	import { MEDIUM_RSS } from '../constants';
	const parser = new Parser();

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		// const url = `/blog/${params.slug}.json`;
		// const res = await fetch(url);
		const { items } = await parser.parseURL(MEDIUM_RSS);
		return {
			props: {
				article: []
			}
		};
		// }

		// return {
		// 	status: res.status,
		// 	error: new Error(`Could not load ${url}`)
		// };
	}
</script>

<script>
	import NavBar from '../components/NavBar.svelte';
	import TheFooter from '../components/TheFooter.svelte';
	import Intro from '../components/Intro.svelte';
	import Blogs from '../components/Blogs.svelte';

	export let article;
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
