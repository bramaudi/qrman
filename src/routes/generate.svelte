<h1>Webcam Test</h1>

{#if !hasCamera}
  <p>Sorry, we can't get access the camera.</p>
{/if}

<video></video>
<div>{result}</div>

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
    })
    scanner.start()

    if (result) scanner.pause()
  }
</script>

<style>
  video {
    width: 100%;
  }
</style>