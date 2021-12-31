<script>
	import { MY_FIRST_NAME, BIO } from '../constants';
	import InternetLinks from './InternetLinks.svelte';
	export let githubBio;
</script>

<section>
	<h1>Hi! I'm {MY_FIRST_NAME}</h1>
	<p>{githubBio || BIO}</p>
	<InternetLinks />
</section>

<style>
	section {
		text-align: center;
		display: flex;
		flex-direction: column;
		padding-bottom: 10rem;
	}

	h1 {
		font-size: xx-large;
	}

	p {
		margin-bottom: 2rem;
	}
</style>
