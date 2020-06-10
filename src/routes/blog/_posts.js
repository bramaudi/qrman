import all from '../../posts/**/*.md'
import path from 'path'

const 	_slugify_strip_re = /[^\w\s-]/g;
const _slugify_hyphenate_re = /[-\s]+/g;
function slugify(s) {
	s = path.parse(s).name
  s = s.replace(_slugify_strip_re, '').trim().toLowerCase();
  s = s.replace(_slugify_hyphenate_re, '-');
  return s;
}

const posts = []
all.map(({ metadata, html, filename }) => {
	const slug = slugify(filename)
	const entry = {
		...metadata,
		html,
		slug
	}
	posts.push(entry)
})

export default posts
