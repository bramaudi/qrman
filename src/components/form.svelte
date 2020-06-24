<script>
  export let func
</script>

<style>
  input {
    display: none;
  }
  label {
    cursor: pointer;
    display: block;
    margin: 0 auto 2rem;
    padding: .5rem;
    width: max-content;
    border-radius: 3px;
    color: white;
    background: cornflowerblue;
  }
  label:hover {
    background: #537fd1;
  }
</style>

<label for="uploadForm">Upload image file</label>
<input id="uploadForm" type="file" accept="image/*" on:change={func}>