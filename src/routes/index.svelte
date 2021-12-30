<script context="module">
	import { GITHUB_USERNAME, MEDIUM_RSS } from '../constants';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const [blogs, projects] = await Promise.all([
			fetch(MEDIUM_RSS),
			fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
		]);

		if (blogs.ok && projects.ok) {
			return {
				props: {
					articles: await blogs.json(),
					projects: await projects.json()
				}
			};
		}
		return {
			status: blogs.ok ? projects.status : blogs.status,
			error: new Error('Fetch failed')
		};
	}
</script>

<script>
	import NavBar from '../components/NavBar.svelte';
	import TheFooter from '../components/TheFooter.svelte';
	import Projects from '../components/Projects.svelte';
	import Blogs from '../components/Blogs.svelte';

	export let articles;
	export let projects;
</script>

<NavBar />
<main>
	<Projects {projects} />
	<Blogs {articles} />
</main>
<TheFooter />

<style>
	main {
		padding: 1em;
		max-width: 700px;
		margin: 0 auto;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}
</style>
