<template>
    <div class='container'>
        <h1>Create a supplier</h1>
        <form v-on:submit.prevent="addSupplier">
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Supplier ID:</label>
                        <input type="text" class="form-control" v-model="supplier.supplier_id">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class='form-group'>
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="supplier.name">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Create Supplier</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                supplier:{}
            }
        },
        methods : {
            addSupplier(){
                let uri= 'http://localhost/rtechshop/public/api/suppliers';
                axios.post(uri, this.supplier).then(response=>{
                    console.log(response)
                });
            }
        },
    }
</script>
