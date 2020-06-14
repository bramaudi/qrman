import posts from './_posts.js'

let tags = []

posts.forEach(post => {
	if (post.tags) tags = tags.concat(post.tags)
})

export default [...new Set(tags.sort())]