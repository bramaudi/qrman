import all from '../../posts/**/*.md'
import { parse } from 'path'

const 	_slugify_strip_re = /[^\w\s-]/g;
const _slugify_hyphenate_re = /[-\s]+/g;
function slugify(s) {
	s = parse(s).name
  s = s.replace(_slugify_strip_re, '').trim().toLowerCase();
  s = s.replace(_slugify_hyphenate_re, '-');
  return s;
}

const posts = []

all.map(({ metadata, html, filename }) => {
	// "title", "date", "tags" are required fontmatter
	// if not exist then mark it as a non-posts content
	const { title, date } = metadata
	let { tags } = metadata

	metadata.tags = tags || ['uncategorized']

	if (title && date) {
		const slug = slugify(filename)
		const entry = {
			...metadata,
			html,
			slug
		}
		// Exclude if post has "draft" frontmatter
		!metadata.draft && posts.push(entry)
	}
})

export default posts
