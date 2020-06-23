import { pagination } from './config.json'

export default (posts) => {
	// Get pagination info
	const COUNT = posts.length
	const LIMIT = pagination.limit
	const PAGE = Math.ceil(COUNT / LIMIT)
	const contents = []

	if (PAGE == 1) {
		contents.push([
			// Sorting array of posts by latest "date"
			...posts.sort((a, b) => new Date(b.date) - new Date(a.date))
		])
	}
	else {
		// Iterate if page more than 1
		for (let i = 0; i < PAGE; i++) {
			const arrayStart = LIMIT * i - LIMIT
			const arrayEnd = LIMIT * i
	
			contents.push([
				...posts
					// Get by offset position
					.filter((val, index) => {
						return index > arrayStart && index <= arrayEnd
					})
					// Sorting array of posts by latest "date"
					.sort((a, b) => new Date(b.date) - new Date(a.date))
			])
		}
	}

	return contents.reverse()
}
