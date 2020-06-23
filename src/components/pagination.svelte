<script>
	import { theme } from '../stores.js'
  export let current
	export let count
	export let link = 'blog'
</script>

<style>
  a, span {
		text-decoration: none;
		display: inline-block;
		padding: 0px 8px;
		margin: 2px;
		border: 1px solid #aaa;
	}
	span {
		background: #aaaaaa;
	}
	.dark a, .dark span {
		border-color: #333333;
	}
	.dark span {
		background: #565656;
	}
</style>

<div class:dark={$theme === 'dark'}>
	Page: {current || 1} / {count}
	<br>
	{#each Array(count) as data, key}
		{#if current == key +1}
			<span>{key +1}</span>
		{:else}
			<a href="{link}?page={key +1}">{key +1}</a>
		{/if}
	{/each}
</div>