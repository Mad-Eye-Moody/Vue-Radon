<template>
    <ul id="market-card">
      <li>MarketId: {{ marketId }}</li>
      <li>Location: {{ location }}</li>
      <li>Total Cards: {{ totalCards }}</li>
      <li>% Of Totals: {{ percentOfTotalCards }}</li>
    </ul>
</template>


<script>
  import MarketsDisplay from './MarketsDisplay.vue'; 
  
  export default {
    name: 'MarketCard',
    props: ['marketId', 'location', 'totalCards', 'percentOfTotalCards']
  }
</script>

<style> 
   #Mmarket-card {
    padding: 5px;
    width:30%;
    margin: 5px 5px 13px 10px;
    float:left;
    font-size: .8em;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2);
  }
</style> 