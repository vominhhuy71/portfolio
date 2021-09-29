import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { importGlobalComponents } from './import-global-components';
import './styles/main.scss';

Vue.config.productionTip = false;
importGlobalComponents();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
