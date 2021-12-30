<script>
	import truncate from 'lodash.truncate';
	export let articles;
</script>

<section id="blogs">
	<h1>Blogs</h1>
	<hr />
	<article class="blogs">
		{#each articles as article}
			<article class="blog">
				<a href={article.link} target="_blank"><h3>{article.title}</h3></a>
				<small>{new Date(article.isoDate).toLocaleString()}</small>
				{#if article['content:encodedSnippet']}
					<p><em>{truncate(article['content:encodedSnippet'], { length: 200 })}</em></p>
				{/if}
			</article>
		{/each}
	</article>
</section>

<style>
	.blog,
	h1 {
		margin-top: 4rem;
	}
</style>
