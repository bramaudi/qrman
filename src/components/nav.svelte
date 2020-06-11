<script>
	import { theme } from '../stores.js'
	export let segment;
	
	function toggleTheme () {
		const ls = window.localStorage
		const newTheme = $theme === 'dark' ? theme.set('light') : theme.set('dark')
		ls.setItem('theme', $theme)
	}
</script>

<style>
	nav {
		display: flex;
		font-weight: 300;
		padding: 0 1rem;
		background: #ffffff;
		border-bottom: 1px solid #ddd;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		display: block;
		bottom: -1px;
		background-color: saddlebrown;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	button {
		cursor: pointer;
		outline: none;
		margin-left: auto;
		font-size: medium;
		border: none;
		background: none;
	}

	/* Dark */
	nav.dark {
		background: #333333;
		color: #ffffff;
		border-color: #525252;
	}
	.dark [aria-current]::after {
		background: #aaaaaa
	}
	.dark button {
		color: #ffffff
	}

	@media only screen and (min-width: 784px) {
		nav {
			padding: 0 calc(100vw - 60em);
		}
	}
</style>

<nav class:dark={$theme === 'dark'}>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>

	<button on:click={toggleTheme} type="button">{$theme}</button>
</nav>
