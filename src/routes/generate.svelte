<h1>Webcam Test</h1>

{#if !hasCamera}
  <p>Sorry, we can't get access the camera.</p>
{/if}

<video></video>
<h2>{result}</h2>

<script>
  import { onMount } from 'svelte';
  import QRScanner from '../qr-scanner.min.js';
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js';

  let result
  let hasCamera = false

  QRScanner.hasCamera().then(res => {
    console.log('hasCamera: ', res)
    hasCamera = res
  })

  onMount(() => {
    init()
  })

  function init() {
    const video = document.querySelector('video')

    const scanner = new QRScanner(video, res => {
      result = res
      alert(res)
    })
    scanner.start()
  }
</script>

<style>
  video {
    width: 100%;
  }
</style>