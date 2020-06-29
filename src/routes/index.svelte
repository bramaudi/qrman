<svelte:head>
	<title>Home</title>
</svelte:head>

<div class:dark={$theme === 'dark'}>

  <Form func={previewImage} />
  
  {#if loading}
    <p>Processing file ...</p>
  {:else}
    {#if !notFound && $result}
      <div class="result" id="msg">{$result}</div>
      <button class="copy button" data-clipboard-target="#msg"><CopyIcon/> Copy to clipboard</button>
    {:else}
      <p>Sorry, can't find the QR Code ... :'(</p>
    {/if}
  {/if}

  Image preview:
  <div class="preview_box">
    <img bind:this={output} src="images/meqrthumb.png" alt="Preview">
  </div>

  <div class="divider"></div>
  <a href="/webcam" class="button">Open Webcam <RightArrow /></a>

</div>

<script>
  import { onMount } from 'svelte';
  import { result, theme } from '../stores.js';
  import QRScanner from '../qr-scanner.min.js';
  import Clipboard from 'clipboard';
  import Form from './../components/form.svelte';
  import RightArrow from '../components/icon/arrow-right.svelte';
  import CopyIcon from '../components/icon/copy.svelte';
  
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js'

  let output
  let notFound = false
  let loading = true

  onMount(() => {
    scanCode()
    new Clipboard('.copy')
  })

  const scanCode = (replaceSrc) => {
    loading = true
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
    max-height: 30vh;
    overflow: auto;
    margin: .5rem 0 1.5rem;
    padding: 0;
    border: 3px solid #dedede;
  }
  .button {
    cursor: pointer;
    display: inline-block;
    padding: .5rem;
    text-decoration: none;
    width: max-content;
    border-radius: 3px;
    border: none;
    color: white;
    background: cornflowerblue;
  }
  .button:hover {
    background: #537fd1;
  }
  .button :global(svg) {
    width: 16px;
    float: right;
    margin-left: .4rem;
  }
  .copy {
    display: block;
    float: right;
    padding: .2rem .5rem;
    margin-bottom: 1rem;
    font-style: inherit;
    font-size: small;
    line-height: 1.5rem;
    background: cadetblue;
  }
  .copy:hover {
    background: #aaa;
  }
  .copy :global(svg) {
    width: 14px;
    float: left;
    margin-left: 0;
    margin-right: .4rem;
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