<video></video>
{#if !hasCamera}
  <div class="error">Sorry, we can't get access the camera.</div>
{:else}
  {#if result}
    <div class="result">
      <input type="text" id="msg" value={result}>
      <button on:click={setTooltip} class="copy tooltip" data-clipboard-target="#msg"><CopyIcon /> Copy all</button>
      <div class="tooltip-text">Copied!</div>
    </div>
  {/if}
{/if}
<a on:click={stopCamera} class="back" href="/"><LeftArrow /> Go back</a>

<script>
  import { onMount } from 'svelte';
  import LeftArrow from '../components/icon/arrow-left.svelte';
  import CopyIcon from '../components/icon/copy.svelte';
  import Clipboard from 'clipboard';
  import QRScanner from '../qr-scanner.min.js';
  QRScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js';

  let scanner
  let result
  let hasCamera

  QRScanner.hasCamera().then(res => {
    hasCamera = res
  })

  onMount(() => {
    init()
    new Clipboard('.copy')
  })

  function init() {
    const video = document.querySelector('video')

    scanner = new QRScanner(video, res => {
      result = res
    })
    scanner.start()
  }

  function stopCamera() {
    scanner.stop()
  }

  function setTooltip() {
    document.querySelector('button.copy').classList.add('success')
  }
</script>

<style>
  video {
    position: fixed;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 100%;
    background: #222;
    color: #eeeeee
  }
  .error, .result {
    position: fixed;
    z-index: 2;
    left: 10%;
    right: 10%;
    display: block;
    padding: 1rem;
    margin: 50% auto;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    color: #000
  }
  input {
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    padding: .2rem .5rem;
    border: none;
    border-bottom: 1px dotted #aaa;
    width: 100%;
  }
  .copy {
    line-height: inherit;
    font-size: inherit;
    font-style: inherit;
    cursor: pointer;
    display: inline-block;
    padding: .2rem .5rem;
    margin-top: 1rem;
    text-decoration: none;
    width: max-content;
    border-radius: 3px;
    border: none;
    color: white;
    background: cornflowerblue;
  }
  .back {
    position: absolute;
    z-index: 3;
    bottom: 2rem;
    padding: .2rem .8rem .2rem .5rem;
    text-decoration: none;
    left: calc(50% - 50px);
    border-radius: 2rem;
    border: none;
    color: white;
    background: cornflowerblue;
  }
  .back :global(svg),
  .copy :global(svg) {
    width: 16px;
    float: left;
    margin-right: .4rem;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted darkslategrey;
  }

  .tooltip ~ .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: darkslategrey;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 90%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip ~ .tooltip-text::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent darkslategrey transparent;
  }

  .tooltip.success ~ .tooltip-text {
    visibility: visible;
  }
</style>