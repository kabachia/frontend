<template>
    <div>
        <h1>Products</h1>
        <div class="display-3"><a href="/products/add" class="btn btn-primary">Add Product</a></div>
        <table class="table table-bordered table-hover">
            <thead>
               <tr>
                   <td>Product ID</td>
                   <td>Name</td>
                   <td>Supplier ID</td>
                   <td>Order ID</td>
                   <td colspan=2>Actions</td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.product_id">
                    <td>{{ product.product_id}}</td>
                    <td>{{ product.name}}</td>
                    <td>{{ product.supplier_id}}</td>
                    <td>{{ product.order_id}}</td>
                    <td><button class="btn btn-danger" @click="deleteProduct(product)">Delete</button></td>
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
                products:[]
            }
        },
        created: function(){
            this.getProducts();
        },
        methods: {
            getProducts(){
                let uri = 'http://localhost/rtechstore/public/api/products';
                axios.get(uri).then((response) => {
                    this.products = response.data;
                });
            },
            deleteProduct(product){
                let uri = 'http://localhost/rtechstore/public/api/products/'+product.product_id;
                axios.delete(uri).then((response)=>{
                    this.$router.go();
                });
            },
        },
    }    
</script>
