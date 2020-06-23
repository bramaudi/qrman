<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{dev && error.stack ? status : '404'}</title>
</svelte:head>

{#if dev && error.stack}
	<h1>{status}</h1>
	<p>{error.message}</p>
	<pre>{error.stack}</pre>
{:else}
	<h1>404</h1>
	<p>Page is not found.</p>
{/if}
