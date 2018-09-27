<template>
    <div id="markets-display"> 
        <input type="text" id="market" v-model="newMarket.market">
        <button @click="addLocation" >Add Location</button>
        <MarketCardComponent/>
    </div> 
</template>

<script>
    import TotalsDisplay from './TotalsDisplay.vue';
    import MarketCard from './MarketCardComponent.vue';
  
    export default {
      name: 'MarketsDisplay',
      props:['totalCards', 'totalMarkets'],
      components: {
          'app-marketcard': MarketCardComponent, 
      },
      data: function(){
          return {
            newMarket: {
                market: ' ' //need to render this on the MarketCardComponet
            }    
          }
      },
      methods: { 
        addLocation:function() {
          this.$emit('marketAdded')
          console.log(this.newMarket.market)
        },
      }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
</script> 

<style>
    #markets-display {
        display: flex;
        overflow: auto;
        padding-top: 10px;
    }
    input {
        height: 20px;
    }
    button {
        position: relative;
        width: 10%;
        height: 5;
        margin-left: 5px;
        font-size: 9px;
    }
</style> 
