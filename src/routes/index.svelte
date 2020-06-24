<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
  import { onMount } from 'svelte'
  import { result, theme } from '../stores.js'
  import QRScanner from '../qr-scanner.min.js'
	import Form from './../components/form.svelte';
  
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js'
  let notFound = false
  let loading = false

  onMount(() => {
    scanCode()
  })

  const scanCode = (replaceSrc) => {
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
    loading = true
    const reader = new FileReader();
    reader.onload = () => {
      scanCode(reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
  }
</script>

<style>
  .preview_box {
    width: 90%;
    max-height: 50vh;
    overflow: auto;
    margin: 1rem auto 1.5rem;
    padding: 0;
    border: 3px solid #aaaaaa;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }
  p { text-align: center; }
  .result {
    padding: 10px;
    margin: .5rem auto;
    background: #dddddd;
    border-left: 5px solid cornflowerblue;
  }
  .result.dark {
    background: #323232;
  }
</style>

<div class="preview_box">
  <img id="output_image" src="images/meqrthumb.png" alt="Preview">
</div>

<Form func={previewImage} />

{#if loading}
  <p>Processing file ...</p>
{:else}

  {#if !notFound && $result}
    <strong>Result:</strong>
    <div class="result" class:dark={$theme === 'dark'}>{$result}</div>
  {:else}
    <p>Sorry, can't find the QR Code ... :'(</p>
  {/if}

{/if}