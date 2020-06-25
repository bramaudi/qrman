<svelte:head>
	<title>About</title>
</svelte:head>

<script>
  import { theme } from '../stores.js'
</script>

<style>
  header {
    padding-top: 1.5rem;
  }
  img {
    display: block;
    margin: auto;
    padding: .5rem;
    max-width: 200px;
    border-radius: 100%;
  }
  .head {
    padding-top: 1rem;
    font-size: xx-large;
    text-align: center;
  }
  p {
    text-align: center;
  }
  .dark img {
    background: #cccccc;
  }
</style>

<header class:dark={$theme === 'dark'}>
  <img src="images/qrman.png" alt="QRMan Logo">
  <div class="head">QR-Man</div>
</header>

<br>

<p>Hello there! <strong>QR-Man</strong> can help you to handle QR Code things.</p>
