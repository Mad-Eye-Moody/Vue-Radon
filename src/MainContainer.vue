<template> 
  <div id='main-container'>
      <TotalsDisplay :totalcards="totalcards" />
      <MarketsDisplay />
  </div>
</template> 


<script>
  import MarketsDisplay from './MarketsDisplay.vue'
  
  export default {
    name: 'MainContainer',
    components: { TotalsDisplay, MarketsDisplay },
  }
</script> 


