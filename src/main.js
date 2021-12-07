import Vue from 'vue';
import dataV from '@jiaminghi/data-view';
import './assets/scss/style.scss';
import echarts from 'echarts';
import Icon from 'vue-awesome/components/Icon';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
import 'vue-awesome/icons/compress.js';
import 'vue-awesome/icons/expand.js';
import 'vue-awesome/icons/compress-alt.js';
import 'vue-awesome/icons/expand-alt.js';

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;
Vue.component('icon', Icon);
Vue.use(dataV);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
