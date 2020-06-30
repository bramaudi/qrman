<div class="toast" class:hide={isHide}>
  <slot></slot>
</div>

<script>
  import { onMount } from 'svelte';
  let toast
  let isHide = false
  
  onMount(() => {
    toast = document.querySelector('.toast')
    toast.style.left = `calc(50% - (${toast.clientWidth}px / 2))`
  })

  setTimeout(() => {
    isHide = true
  }, 3000)
</script>

<style>
  .toast {
    display: inline-block;
    text-align: center;
    position: fixed;
    top: 0;
    padding: .2rem 1.5rem;
    border-radius: 1rem;
    animation: show .5s forwards;
    background: #64cded;
    color: #fff;
  }
  .hide {
    animation: close .5s forwards;
  }

  @keyframes show {
    0% {
      margin-top: -10%;
    }
    100% {
      margin-top: 2%;
    }
  }

  @keyframes close {
    0% {
      margin-top: 2%;
    }
    100% {
      margin-top: -10%;
    }
  }
</style>