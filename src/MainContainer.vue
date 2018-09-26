<template> 
  <div id='main-container'>
      <TotalsDisplay v-bind:totalCards="totalCards" v-bind:totalMarkets="totalMarkets"></TotalsDisplay>
      <MarketsDisplay />
  </div>
</template> 


<script>
  import TotalsDisplay from './TotalsDisplay.vue';  
  import MarketsDisplay from './MarketsDisplay.vue'
  
  export default {
    name: 'MainContainer',
    components: { 
      TotalsDisplay, 
      MarketsDisplay 
     },
     data () {
      return {
        marketId: 0, 
        totalCards: 0, 
        totalMarkets: 0,
        percentOfTotalCards: 0, 
      }
    }
  }
</script> 

