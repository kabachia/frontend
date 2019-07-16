import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ListSuppliers from './components/ListSuppliers.vue'
import AddSupplier from './components/AddSupplier.vue'
Vue.use(VueRouter,VueAxios,axios);

const routes= [
    {name: 'listsuppliers', path : '/suppliers',component : ListSuppliers},
    {name: 'addsupplier', path : '/suppliers/add',component : AddSupplier},
];

const router = new VueRouter({mode : 'history', routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
