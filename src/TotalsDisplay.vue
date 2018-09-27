<template> 
     <div id="totals-display">
        <span id='totalcards'>Total Cards:{{ totalCards }}</span>
        <span id='totalmarkets'>Total Markets:{{ totalMarkets }}</span>

     </div>
</template> 

<script>
  import MarketsDisplay from './MarketsDisplay.vue';
  
  export default {
    name: 'TotalsDisplay',
    props: ['totalMarkets', 'totalCards'],
  }
</script> 

<style>
  #totals-display {
    padding: 10px;
    width:95%;
    margin: 15px auto;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2);
  }
  #totalcards {
    display: flex;
    margin-bottom: 8px;
  }
</style> 
