<template>
    <div>
        <h1>Suppliers</h1>
        <div class="display-3"><a href="/suppliers/add" class="btn btn-primary">Add Supplier</a></div>
        <table class="table table-bordered table-hover">
            <thead>
               <tr>
                   <td>Supplier ID</td>
                   <td>Name</td>
                   <td colspan=2>Actions</td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="supplier in suppliers" :key="supplier.supplier_id">
                    <td>{{ supplier.supplier_id}}</td>
                    <td>{{ supplier.name}}</td>
                    <td><button class="btn btn-danger" @click="deleteSupplier(supplier)">Delete</button></td>
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
                suppliers:[]
            }
        },
        created: function(){
            this.getSuppliers();
        },
        methods: {
            getSuppliers(){
                let uri = 'http://localhost/rtechstore/public/api/suppliers';
                axios.get(uri).then((response) => {
                    this.suppliers = response.data;
                });
            },
            deleteSupplier(supplier){
                let uri = 'http://localhost/rtechstore/public/api/suppliers/'+supplier.supplier_id;
                axios.delete(uri).then((response)=>{
                    this.$router.go();
                });
            },
        },
    }    
</script>
