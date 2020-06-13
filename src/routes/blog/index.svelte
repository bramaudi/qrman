<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import PostList from '../../components/post-list.svelte'
	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>All Posts</h1>

<PostList {posts} />