<div><strong>TIPS</strong>: {tips[Math.floor(Math.random()*tips.length)]}.</div>

<script>
  const tips = [
    'Faster camera to focus, faster the scan',
    'Have enought brightness is good',
    'Capturing in flat background color is recommended',
    'Capturing in flat background color is recommended',
    'Capturing in flat background color is recommended',
    'Flat background prevent the pattern conflict',
  ]
</script>

<style>
  div {
    text-align: center;
    position: fixed;
    z-index: 2;
    bottom: 15%;
    left: 10%;
    right: 10%;
    padding: .5rem;
    border-radius: 10px;
    font-size: small;
    background: rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
  }
</style>