<script>
	import { onMount } from 'svelte'
	import { theme } from '../stores.js'
	import Nav from '../components/nav.svelte';

	onMount(() => {
		const ls = window.localStorage
		if (ls.getItem('theme')) {
			$theme = ls.getItem('theme')
		} else {
			ls.setItem('theme', $theme)
		}
	})

	export let segment;
</script>

{#if segment === 'webcam'}
	<slot></slot>
{:else}
	<main class:dark={$theme === 'dark'}>
		<slot></slot>
	</main>

	<Nav {segment}/>
{/if}

<style>
	main {
		padding: 2em;
    margin: 0 auto 3rem;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	{#if $theme === 'dark'}
	<style>
	::-webkit-scrollbar-track {
		background: #333333;
	}
	::-webkit-scrollbar-thumb {
		background: #888888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #696969;
	}

	body {
		background: #242424;
    color: #dedede;
    border-color: #333;
	}

	.tags a {
		background: #454545;
		color: #ffffff;
	}

	table th, table td {
		border: 1px solid #333333;
	}
	table tr {
		background-color: #242424 !important;
		border-top: 1px solid #dedede !important;
	}
	table tr:nth-child(2n) {
		background-color: #292929 !important;
	}

	blockquote {
		color: #797979 !important;
		border-color: #555555 !important;
	}

	code {
		background: #506475 !important;
	}
	pre > code {
		background: inherit !important;
	}
	</style>
	{/if}
</svelte:head>