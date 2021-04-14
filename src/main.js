import Vue from 'vue'; //importa la libreria, dependencia de npm
import App from './App.vue';
import '@/assets/css/tailwind.css'; //el @ hace referencia relativa al directorio src
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { VueSpinners } from '@saeris/vue-spinners';


import router from '@/router';
import { dollarFilter } from '@/filters';
import { kDollarFilter, kSeparatorFilter, percentFilter } from './filters';

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter('dollar', dollarFilter);
Vue.filter('Kdollar', kDollarFilter);
Vue.filter('percent', percentFilter);
Vue.filter('kSeparator', kSeparatorFilter);
Vue.config.productionTip = false;

new Vue({
  router, //usando los shortcuts de ES6 cuando el nombre de la propiedad es igual al nombre de la variable se pone sólo una vez
  // instancia de Vue
  render: (h) => h(App), //utiliza la api render de vue para montar el componente ppal dentro del index.html
}).$mount('#app');
