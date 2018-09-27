<template> 
  <div id='main-container'>
      <app-totalsdisplay v-bind:totalCards="totalCards" v-bind:totalMarkets="totalMarkets" />
      <app-marketdisplay v-bind:totalCards="totalCards" 
        v-bind:totalMarkets="totalMarkets" 
        v-bind:marketId="marketId"
        v-bind:location="location"
        v-bind:cards="cards"
        v-bind:percentOfTotalCards="percentOfTotalCards"
        @marketAdded="addedLocation"
      />
  </div>
</template> 

<script>
  import TotalsDisplay from './TotalsDisplay.vue';  
  import MarketsDisplay from './MarketsDisplay.vue'
  
  export default {
    name: 'MainContainer',
    props: ['addLocation'],
    components: { 
      'app-totalsdisplay':TotalsDisplay, 
      'app-marketdisplay':MarketsDisplay 
     },
     methods: {
       addedLocation: function(totalMarkets){
         return this.totalMarkets += 1
       }            
      },
     data () {
      return {
        marketId: 0,
        location: ' ', 
        totalMarkets: 0,
        cards: 0,
        totalCards: 0, 
        percentOfTotalCards: 0,
      }
    }
  }
</script> 

@marketAdded="addedLocation = $event"