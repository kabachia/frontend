<template>
    <div class='container'>
        <h1>Create an order</h1>
        <form v-on:submit.prevent="addOrder">
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Order ID:</label>
                        <input type="text" class="form-control" v-model="order.order_id">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Date:</label>
                        <input type="text" class="form-control" v-model="order.order_date">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Headquarters ID:</label>
                        <input type="text" class="form-control" v-model="order.headquarters">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Create Order</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                order:{}
            }
        },
        methods : {
            addOrder(){
                let uri= 'http://localhost/rtechshop/public/api/orders';
                axios.post(uri, this.order).then(response=>{
                    console.log(response)
                });
            }
        },
    }
</script>
