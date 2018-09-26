<template>
  <div id="app">
    <h1>MegaMarket Loyalty Cards</h1> 
    <MainContainer />
  </div>
</template>

<script> 
  import  MarketCard  from "./MarketCardComponent.vue";
  import MainContainer from "./MainContainer.vue"
  
  export default {
    name: 'App',
    components: {
      MainContainer,
    } 
  }
</script>


//styles for app

<style> 
  * {
    box-sizing: border-box;
    font-family: 'Ubuntu Light', 'Century Gothic', sans-serif;
    margin: 0;
    padding: 0;
    color: #393939;
    background-color: #FFF;
  }
  #app {
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 10px 15px 39px rgba(0, 0, 0, .2);
    border-radius: 5px;
  }
  #app h1 {
    word-spacing: 10px;
    letter-spacing: 6px;
  }
</style>