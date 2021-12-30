<script>
	import truncate from 'lodash.truncate';
	export let projects;
</script>

<section id="projects">
	<h1>Projects</h1>
	<hr />
	<article class="projects">
		{#each projects as project}
			<article class="project">
				<a href={project.html_url} target="_blank"><h3>{project.name}</h3></a>
				<small>{new Date(project.updated_at).toLocaleString()}</small>
				{#if project.description}
					<p><em>{truncate(project.description, { length: 200 })}</em></p>
				{/if}
			</article>
		{/each}
	</article>
</section>

<style>
	.project,
	h1 {
		margin-top: 4rem;
	}
	section {
		margin-bottom: 10rem;
	}
</style>
