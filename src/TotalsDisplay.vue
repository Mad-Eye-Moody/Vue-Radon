<template> 
    <div id="totals-display">
        <label id='totalcards'>Total Cards:</label>
        <label id='totalmarkets'>Total Markets:</label> 
     </div> 
</template> 

<script>
  import TotalsDisplay from './TotalsDisplay.vue';
  export default {
    name: 'TotalsDisplay',
      props: ['totalcards', 'totalmarkets'],
      data () {
        return {
          totalsdisplay: 0,
          totalCards: 0,
        }
      }
    }
</script> 

<style>
  #totals-display {
    padding: 10px;
    width:95%;
    margin: 15px auto;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .2);
  }
  label {
    display: flex;
    margin: 9px;
  }
</style> 
