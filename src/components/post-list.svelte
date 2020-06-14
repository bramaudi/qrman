<script>
export let posts
</script>

<style>
	ul {
    padding: 0 1.5rem;
		margin: 0 0 1em 0;
		line-height: 1.5;
  }
  .date {
    display: inline;
    font-size: small;
    color: #888888;
  }
  a {
    text-decoration: none;
    border-bottom: 1px dotted #888888;
  }
</style>

<ul class="posts-list">
	{#if !posts.length}
		<li>There is no posts found.</li>
	{/if}
  {#each posts as post}
    <li>
      <!-- we're using the non-standard `rel=prefetch` attribute to
            tell Sapper to load the data for the page as soon as
            the user hovers over the link or taps it, instead of
            waiting for the 'click' event -->
      <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a> &#183; 
      <div class="date">{post.date}</div>
    </li>
  {/each}
</ul>