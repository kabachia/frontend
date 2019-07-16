import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ListSuppliers from './components/ListSuppliers.vue'
import AddSupplier from './components/AddSupplier.vue'
import ListOrders from './components/ListOrders.vue'
import AddOrder from './components/AddOrder.vue'
import ListProducts from './components/ListProducts.vue'
import AddProduct from './components/AddProduct.vue'
Vue.use(VueRouter,VueAxios,axios);

const routes= [
    {name: 'listsuppliers', path : '/suppliers',component : ListSuppliers},
    {name: 'addsupplier', path : '/suppliers/add',component : AddSupplier},
    {name: 'listorders', path : '/orders',component : ListOrders},
    {name: 'addorder', path : '/orders/add',component : AddOrder},
    {name: 'listproducts', path : '/products',component : ListProducts},
    {name: 'addproduct', path : '/products/add',component : AddProduct},
];

const router = new VueRouter({mode : 'history', routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
