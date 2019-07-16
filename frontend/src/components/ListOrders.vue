<template>
    <div>
        <h1>Orders</h1>
        <div class="display-3"><a href="/orders/add" class="btn btn-primary">Add Order</a></div>
        <table class="table table-bordered table-hover">
            <thead>
               <tr>
                   <td>Order ID</td>
                   <td>Date</td>
                   <td>Headquarters ID</td>
                   <td colspan=2>Actions</td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.order_id">
                    <td>{{ order.order_id}}</td>
                    <td>{{ order.order_date}}</td>
                    <td>{{ order.headquarters_id}}</td>
                    <td><button class="btn btn-danger" @click="deleteOrder(order)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                orders:[]
            }
        },
        created: function(){
            this.getOrders();
        },
        methods: {
            getOrders(){
                let uri = 'http://localhost/rtechstore/public/api/orders';
                axios.get(uri).then((response) => {
                    this.orders = response.data;
                });
            },
            deleteOrder(order){
                let uri = 'http://localhost/rtechstore/public/api/orders/'+order.order_id;
                axios.delete(uri).then((response)=>{
                    this.$router.go();
                });
            },
        },
    }    
</script>
