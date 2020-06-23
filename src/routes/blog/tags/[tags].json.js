import { metaOnly as posts } from '../_posts.js'
import paginationPosts from '../../../paginationPosts.js'

export function get(req, res, next) {
	const { tags } = req.params;
	const contents = posts.filter(post => post.tags && post.tags.includes(tags))
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(JSON.stringify(paginationPosts(contents)));
}
