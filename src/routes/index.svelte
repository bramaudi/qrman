<svelte:head>
	<title>Home</title>
</svelte:head>

<div class:dark={$theme === 'dark'}>
  <div class="preview_box">
    <video></video>
    <img id="output_image" src="images/meqrthumb.png" alt="Preview">
  </div>

  <Form func={previewImage} />

  <div class="divider"></div>

  {#if loading}
    <p>Processing file ...</p>
  {:else}

    {#if !notFound && $result}
      <div class="result">{$result}</div>
    {:else}
      <p>Sorry, can't find the QR Code ... :'(</p>
    {/if}

  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { result, theme } from '../stores.js'
  import QRScanner from '../qr-scanner.min.js'
	import Form from './../components/form.svelte';
  
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js'

  let notFound = false
  let loading = true

  onMount(() => {
    scanCode()
  })

  const scanCode = (replaceSrc) => {
    loading = true
    const output = document.getElementById('output_image');
    output.src = replaceSrc || output.src

    QRScanner
      .scanImage(output.src)
      .then(res => {
        notFound = false        
        result.set(res)
      })
      .catch(() => {
        notFound = true        
      })
      .finally(() => {
        loading = false
      })
  }
  
  const previewImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      scanCode(reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
  }
</script>

<style>
  .preview_box {
    width: 100%;
    max-height: 40vh;
    overflow: auto;
    margin: 0 0 1.5rem;
    padding: 0;
    border: 3px solid #dedede;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }
  .divider {
    width: 75%;
    margin: 1.5rem auto;
    border-radius: 80%;
    border: 1px solid #cccccc;
  }
  p { text-align: center; }
  .result {
    padding: 10px;
    margin: .5rem auto;
    background: #dddddd;
    border-left: 5px solid cornflowerblue;
  }
  .dark .divider {
    border-color: #323232;
  }
  .dark .preview_box {
    border-color: #565656;
  }
  .dark .result {
    background: #323232;
  }
</style>