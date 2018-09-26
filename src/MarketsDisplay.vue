<template>
    <div id="markets-display"> 
        <input>
        <button v-on:click="totalCards += 1">Add Location</button>
    </div> 
</template>

<script>
    export default {
      name: 'MarketsDisplay',
      props:['totalcards', 'totalsdisplay'],
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
