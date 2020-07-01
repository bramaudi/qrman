<div class="preload" class:hide={!$preloading}></div>

<script>
  import { stores } from '@sapper/app';
	const { preloading } = stores();
</script>

<style>
  .preload {
		position: fixed;
		top: 0;
		width: 100%;
		height: 5px;
		animation: loading 2s forwards;
		background: cornflowerblue;
	}
	.hide {
		width: 100%;
		animation: fade-out .5s forwards;
	}
  @keyframes loading {
		0% { width: 0% }
		10% { width: 10% }
		20% { width: 20% }
		30% { width: 20% }
		45% { width: 30% }
		60% { width: 50% }
		70% { width: 70% }
		80% { width: 75% }
		90% { width: 85% }
		100% { width: 90% }
	}

	@keyframes fade-out {
		0% { visibility: visible; }
		100% { visibility: hidden; }
	}
</style>