<script context="module">
	export const prerender = true;

	import { GITHUB_USERNAME, MEDIUM_RSS } from '../constants';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const [blogs, projects, githubProfile] = await Promise.all([
			fetch(MEDIUM_RSS),
			fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`),
			fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
		]);
		if (blogs.ok && projects.ok) {
			return {
				props: {
					articles: await blogs.json(),
					projects: await projects.json(),
					github: await githubProfile.json()
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
	import { ME, BANNER_IMAGE, BIO, WEBSITE_URL } from '../constants';
	import Banner from '../components/Banner.svelte';
	import TheFooter from '../components/TheFooter.svelte';
	import Projects from '../components/Projects.svelte';
	import Blogs from '../components/Blogs.svelte';
	import { onMount } from 'svelte';
	import { discordify } from '../helpers/utils';

	export let articles;
	export let projects;
	export let github;

	onMount(() => {
		discordify('Someone visited your website');
	});

	const description = github.bio || BIO;
</script>

<svelte:head>
	<title>{ME}</title>
	<meta name="title" content={ME} />
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="cool, sad, confused, life, bike, javascript, python, computer science"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={WEBSITE_URL} />
	<meta property="og:title" content={ME} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={BANNER_IMAGE} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={WEBSITE_URL} />
	<meta property="twitter:title" content={ME} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={BANNER_IMAGE} />
</svelte:head>

<Banner {github} />
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
