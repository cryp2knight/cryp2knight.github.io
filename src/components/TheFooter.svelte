<script>
	import { ME } from '../constants';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<small>Made with &lt;3 and svelte</small>
	<span>© {currentYear}, {ME}</span>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		border-top: gray 1px solid;
		padding: 3rem 1rem 1rem 1rem;
		margin: 3rem 2rem 0 2rem;
		text-align: center;
	}

	small {
		color: gray;
		margin-bottom: 1rem;
	}
</style>
