<script>
	import { INTERNET_PROFILES } from '../constants';
	import Icons from './Icons.svelte';
	const profiles = Object.keys(INTERNET_PROFILES).map((key) => ({
		...INTERNET_PROFILES[key],
		id: key
	}));
</script>

<span class="profiles">
	{#each profiles as profile}
		<a href={profile.url} target="_blank">
			<Icons icon={profile.icon} />
		</a>
	{/each}
</span>

<style>
	.profiles {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-end;
	}
</style>
