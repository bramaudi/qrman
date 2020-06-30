<svelte:head>
	<title>QRMan | Scan</title>
</svelte:head>

<div class:dark={$theme === 'dark'}>

  <h1>Scan</h1>

  <div class="preview_box" class:show={output}>
    <img bind:this={preview} alt="Preview">
  </div>

  {#if output}
    {#if loading}
      <p>Processing file ...</p>
    {:else}
      {#if !notFound && $result}
        <div class="result" id="msg">
          {#if isUrl($result)}
            <a href={$result}>{$result}</a>
          {:else}
            {$result}
          {/if}
        </div>
        <button on:click={setCopied} class="copy button" data-clipboard-target="#msg"><CopyIcon/> Copy to clipboard</button>
        {#if copied} <Toast>Copied!</Toast> {/if}
      {:else}
        <p>Sorry, can't find the QR Code ... :'(</p>
      {/if}
    {/if}
    <div class="divider"></div>
  {/if}
  
  <Form func={previewImage} />
  <a href="/webcam" class="button"><VideoIcon /> Open Webcam</a>

</div>

<script>
  import { result, theme } from '../stores.js';
  import Toast from '../components/toast.svelte';
  import QRScanner from '../qr-scanner.min.js';
  import Clipboard from 'clipboard';
  import isUrl from 'is-url';
  import Form from './../components/form.svelte';
  import VideoIcon from '../components/icon/video.svelte';
  import CopyIcon from '../components/icon/copy.svelte';
  
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js'

  let copied = false
  let preview
  let output = false
  let notFound = false
  let loading = false

  const scanCode = (replaceSrc) => {
    loading = true
    preview.src = replaceSrc

    QRScanner
      .scanImage(replaceSrc)
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
    output = true
    const reader = new FileReader();
    reader.onload = () => {
      scanCode(reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  function setCopied() {
    copied = true
    setTimeout(() => {
      copied = false
    }, 3500)
  }
</script>

<style>
  .preview_box {
    display: none;
    width: 100%;
    max-height: 30vh;
    overflow: auto;
    margin: .5rem 0 1.5rem;
    padding: 0;
    border: 3px solid #dedede;
  }
  .preview_box.show {
    display: block;
  }
  .button {
    cursor: pointer;
    display: inline-block;
    padding: .5rem;
    margin: 5px 5px 0 0;
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
    float: left;
    margin-right: .4rem;
  }
  .copy {
    display: inline-block;
    padding: .2rem .5rem;
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