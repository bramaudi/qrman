<a href="/webcam" bind:this={webcamButton} class="webcam-button">
  <div>
    <Icon />
    <div class="text">Open Webcam</div>
  </div>
</a>

<script>
  import { onMount } from 'svelte';
  import Icon from './icon/video.svelte';

  let webcamButton

  onMount(() => {
    webcamButton.style.width = webcamButton.clientWidth + 'px'
    webcamButton.style.height = webcamButton.clientWidth + 'px'
  })
</script>

<style>
  .webcam-button {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
    border-radius: 100%;
    background: cornflowerblue;
    color: #fff
  }
  .webcam-button:hover {
    background: #537fd1;
  }
  .webcam-button :global(svg) {
    display: block;
    width: 30px;
    height: auto;
    margin: auto auto .5rem;
  }
</style>