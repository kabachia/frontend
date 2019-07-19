<template>
    <div class='container'>
        <h1>Create a product</h1>
        <form v-on:submit.prevent="addProduct">
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Product ID:</label>
                        <input type="text" class="form-control" v-model="product.product_id">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Supplier ID:</label>
                        <input type="text" class="form-control" v-model="product.supplier_id">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Create Product</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                product:{}
            }
        },
        methods : {
            addProduct(){
                let uri= 'http://localhost/rtechshop/public/api/products';
                axios.post(uri, this.order).then(response=>{
                    console.log(response)
                });
            }
        },
    }
</script>
