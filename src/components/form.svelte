<label bind:this={labelForm} for="uploadForm">
  <div>
    <Icon />
    <div>Select image file</div>
  </div>
</label>

<input id="uploadForm" type="file" accept="image/*" on:change={func}>

<script>
  import { onMount } from 'svelte';
  import Icon from '../components/icon/image.svelte'
  
  export let func
  let labelForm

  onMount(() => {
    labelForm.style.width = labelForm.clientWidth + 'px'
    labelForm.style.height = labelForm.clientWidth + 'px'
  })
</script>

<style>
  input {
    display: none;
  }
  label {
    cursor: pointer;
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
  label:hover {
    background: #537fd1;
  }
  label :global(svg) {
    display: block;
    width: 30px;
    height: auto;
    margin: auto auto .5rem;
  }
</style>