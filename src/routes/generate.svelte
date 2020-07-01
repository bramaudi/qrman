<sapper:head>
  <title>Generate | QRMan</title>
  <script defer src="/js/qrcode.min.js"></script>
</sapper:head>

<div class:dark={$theme === 'dark'}>
  <label for="text">Text:</label>
  <input type="text" id="text" bind:value={inpText} on:input={generate}>

  <label for="size">Size:</label>
  <input type="range" id="size" bind:value={inpSize} on:input={resize} min="30" max="300">

  <div class="output" bind:this={output} class:show={inpText}></div>
</div>

<script>
  import { theme } from '../stores.js';
  let qrcode
  let output
  let inpText
  let inpSize = '192'
  let config = {
    text: inpText,
    width: inpSize,
    height: inpSize
  }

  function init() {
    output.innerHTML = ''
    qrcode = new QRCode(output, config)
  }

  function generate() {
    init()
    qrcode.makeCode(inpText)  
  }

  function resize() {
    config.width = inpSize
    config.height = inpSize
    inpText && generate()
  }
</script>

<style>
  label {
    display: block;
    font-weight: bold;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    border: none;
    background: #eee;
  }
  .output {
    display: none;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem;
    width: fit-content;
    background: #fff;
  }
  .output.show {
    display: flex;
  }
  .dark input {
    background: #333;
    color: #fff;
  }
</style>