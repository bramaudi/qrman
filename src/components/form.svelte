<label for="uploadForm"><ImageIcon /> Select image file</label>
<input id="uploadForm" type="file" accept="image/*" on:change={func}>

<script>
  export let func
  import ImageIcon from '../components/icon/image.svelte'
</script>

<style>
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: inline-block;
    padding: .5rem;
    width: max-content;
    border-radius: 3px;
    color: white;
    background: cornflowerblue;
  }
  label:hover {
    background: #537fd1;
  }
  label :global(svg) {
    width: 16px;
    float: left;
    margin-right: .4rem;
  }
</style>