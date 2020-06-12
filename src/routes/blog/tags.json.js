import tags from './_tags.js'

const contents = JSON.stringify(tags)

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}