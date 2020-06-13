<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
.heading {
	font-size: small
}
.title {
	font-weight: bold;
	font-size: xx-large;
	margin: .4rem 0;
}
.date {
	margin-top: -10px;
	color: #888888;
}
.tags {
	margin: 0;
}
</style>

<svelte:head>
	<title>{post.title}</title>
	<script src="js/prism.js" />
	<link rel="stylesheet" href="css/markdown.css">
	<link rel="stylesheet" href="css/prism.css">
</svelte:head>

<div class="heading">
	<div class="date">{post.date}</div>
	<div class="tags">
		{#each post.tags as tag}
			<a href="blog/tags/{tag}">{tag}</a>
		{/each}
	</div>
</div>

<div class="title">{post.title}</div>
<div class='markdown-body'>
	{@html post.html}
</div>
