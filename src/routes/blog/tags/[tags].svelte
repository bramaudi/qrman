<script context="module">
	export async function preload({ params, query }) {
    const { tags } = params
    const res = await this.fetch(`blog/tags/${tags}.json`);
    const posts = await res.json();
        
		if (res.status === 200) {
			return {
        posts,
        tags
      };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import PostList from '../../../components/post-list.svelte'
  export let posts;
  export let tags;
</script>

<svelte:head>
<title>Tags "{tags}"</title>
</svelte:head>

<h1>Tags "{tags}"</h1>

<ul>
{#each posts as post}
  <PostList {post} />
{/each}
</ul>