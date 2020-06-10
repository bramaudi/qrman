<script>
	import { onMount } from 'svelte'
	import { theme } from '../stores.js'
	import Nav from '../components/Nav.svelte';

	onMount(() => {
		const ls = window.localStorage
		ls.setItem('theme', $theme)
	})

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>

<svelte:head>
	{#if $theme === 'dark'}
	<link rel="stylesheet" href="css/global-dark.css">
	{/if}
</svelte:head>

<Nav {segment}/>

<main class:dark={$theme === 'dark'}>
	<slot></slot>
</main>