<script context="module">
	export async function preload({ params, query }) {
		const posts = await this.fetch(`blog.json`).then(r => r.json())
		const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { posts, tags }
	}
</script>

<script>
	import PostList from '../components/post-list.svelte'
	export let posts;
	export let tags;
</script>

<style>
	.title {
		text-align: center;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 64px
	}
	figure img {
		display: block;
		margin: auto;
		margin-bottom: 5rem;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="title">Hamve Fumn!!</h1>

<figure>
	<img src="images/lil_bro.png" alt="Lil Bro doge">
</figure>

<h1>Tags</h1>

<div class="tags">
	{#each tags.slice(0, 10) as tag}
		<a href="blog/tags/{tag}">{tag}</a>
	{/each}
</div>

... see <a href="blog/tags">more tags</a>.

<br><br>

<h1>Recent posts</h1>

<PostList posts={posts[0]} />