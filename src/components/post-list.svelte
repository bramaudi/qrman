<script>
export let post = {
  title: 'Some post title',
  slug: 'example-slug'
}
</script>

<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>