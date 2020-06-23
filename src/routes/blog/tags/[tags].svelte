<script context="module">
	export async function preload({ params, query }) {
    const { tags } = params
    const res = await this.fetch(`blog/tags/${tags}.json`);
    const posts = await res.json();
        
		if (res.status === 200) {
			return {
        posts,
        tags,
        query
      };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import PostList from '../../../components/post-list.svelte'
  import Pagination from '../../../components/pagination.svelte'
  export let posts
  export let tags
  export let query
  $: current = query.page || 1
</script>

<svelte:head>
<title>Tags "{tags}"</title>
</svelte:head>

<h1>Tags "{tags}"</h1>

<PostList posts={posts[current -1]} />

<Pagination {current} count={posts.length} link="blog/tags/{tags}" />