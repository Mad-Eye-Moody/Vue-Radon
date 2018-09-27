import Vue from 'vue';
import App from './App.vue';


//register the component globally. 

//Vue.component('name', filename)


new Vue({
  el: '#app',
  render: h => h(App)
});
