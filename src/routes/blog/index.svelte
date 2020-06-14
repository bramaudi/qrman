<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import { theme } from '../../stores.js'
	import PostList from '../../components/post-list.svelte'
	export let posts
	let keyword = ''

	function filteredPosts(posts, keyword) {
		return posts.filter(post => {
			post = post['title'].toLowerCase()
			return post.indexOf(keyword) > -1; 
		});
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<style>
label {
	display: block;
	font-size: large;	
}
input {
	margin: 0 0 10px;
	padding: 8px;
	font-family: inherit;
	background: #fff;
	border: 1px solid #aaa;
}
.dark input {
	color: #fff;
	background: #333333;
	border-color: #aaaaaa;
}
</style>

<h1>All Posts</h1>
<form class:dark={$theme === 'dark'}>
	<label for="search">Search</label>
	<input type="text" id="search" bind:value={keyword} placeholder="Type post title">
</form>

{#if keyword === ''}
	<PostList {posts} />
{:else}
	<PostList posts={filteredPosts(posts, keyword)} />
{/if}