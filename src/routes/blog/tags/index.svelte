<script context="module">
	export async function preload({ params, query }) {
		const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { tags }
	}
</script>

<script>
	export let tags
</script>

<svelte:head>
<title>Tags</title>
</svelte:head>

<h1>Blog Tags</h1>

<div class="tags">
	{#each tags as tag}
		<a href="blog/tags/{tag}">{tag}</a>
	{/each}
</div>