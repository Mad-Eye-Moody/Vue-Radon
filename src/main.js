import Vue from 'vue';
import App from './App.vue';


new Vue({
  el: '#app',
  data: {
    marketId: String, 
    location: String, 
    cards: String, 
    percentOfTotals: Number 
  },
  render: h => h(App)
});
