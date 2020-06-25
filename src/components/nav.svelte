<script>
	import { theme } from '../stores.js'
	export let segment;
	
	function toggleTheme () {
		const ls = window.localStorage
		$theme === 'dark' ? theme.set('light') : theme.set('dark')
		ls.setItem('theme', $theme)
	}
</script>

<style>
	nav {
    position: relative;
		font-weight: 300;
	}

	ul {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
		display: flex;
		margin: 0;
		padding: 0 calc((100vw - 500px) / 2);
		background: #ffffff;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
    flex: auto;
		display: block;
    text-align: center;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 5px;
		display: block;
		bottom: -1px;
		background-color: saddlebrown;
	}

	a, span {
		text-decoration: none;
		padding: 1em 0.5em;
    display: block;
    text-transform: capitalize;
    cursor: pointer;
	}

	/* Dark */
	.dark ul {
		background: #333333;
		color: #ffffff;
	}
	.dark [aria-current]::after {
		background: #aaaaaa
  }

  @media screen and (min-width: 784px) {

  }
</style>

<nav class:dark={$theme === 'dark'}>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Scan</a></li>
		<li><a aria-current="{segment === 'generate' ? 'page' : undefined}" href="generate">Generate</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
    <li><span class="toggle" on:click={toggleTheme} type="button">{$theme}</span></li>
	</ul>
</nav>
