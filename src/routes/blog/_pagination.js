import { metaOnly as posts } from './_posts.js'

// Get pagination info
const COUNT = posts.length
const LIMIT = 2
const PAGE = Math.ceil(COUNT / LIMIT)
const paginatedPosts = []

// Iterate page count
for (let i = 0; i < PAGE; i++) {
	const arrayStart = LIMIT * i - LIMIT
	const arrayEnd = LIMIT * i

	paginatedPosts.push([
		...posts
			// Get by offset position
			.filter((val, index) => {
				return index > arrayStart && index <= arrayEnd
			})
			// Sorting array of posts by latest "date"
			.sort((a, b) => new Date(b.date) - new Date(a.date))
	])
}

export default paginatedPosts.reverse()
