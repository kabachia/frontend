import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ListSuppliers from './components/ListSuppliers.vue'
import AddSupplier from './components/AddSupplier.vue'
import ListOrders from './components/ListOrders.vue'
import AddOrder from './components/AddOrder.vue'
Vue.use(VueRouter,VueAxios,axios);

const routes= [
    {name: 'listsuppliers', path : '/suppliers',component : ListSuppliers},
    {name: 'addsupplier', path : '/suppliers/add',component : AddSupplier},
    {name: 'listorders', path : '/orders',component : ListOrders},
    {name: 'addorder', path : '/orders/add',component : AddOrder},
];

const router = new VueRouter({mode : 'history', routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
