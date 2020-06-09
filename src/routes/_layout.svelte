<script>
	import { theme } from '../stores.js'
	import Nav from '../components/Nav.svelte';

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

<Nav {segment}/>

<main class:dark={$theme === 'dark'}>
	<slot></slot>
</main>