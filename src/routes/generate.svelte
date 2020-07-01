<sapper:head>
  <title>Generate | QRMan</title>
</sapper:head>

<sapper:footer>
  <script src="/js/qrcode.min.js"></script>
</sapper:footer>

<div class:dark={$theme === 'dark'}>
  <label for="text">Text:</label>
  <input type="text" id="text" bind:value={inpText} on:input={generate}>

  <label for="size">Size:</label>
  <input type="range" id="size" bind:value={inpSize} on:input={resize} min="30" max="500">

  <div class="output" bind:this={output}></div>
</div>

<script>
  import { onMount } from 'svelte';
  import { theme } from '../stores.js';
  let qrcode
  let output
  let inpText = 'QRMan'
  let inpSize = '192'
  let config = {
    text: inpText,
    width: inpSize,
    height: inpSize,
    colorDark: '#333333',
    colorLight: '#ffffff'
  }

  onMount(() => {
    init(config)
  })

  function init(config) {
    output.innerHTML = ''
    qrcode = new QRCode(output, config)
  }

  function generate() {
    qrcode.makeCode(inpText)
  }

  function resize() {
    config.width = inpSize
    config.height = inpSize
    init(config)
  }
</script>

<style>
  label {
    display: block;
    font-weight: bold;
  }
  input {
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    border: none;
    background: #f0f0f0;
  }
  .output {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem;
  }
  .dark input {
    background: #333;
    color: #fff;
  }
</style>