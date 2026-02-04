<script setup>
    import { onMounted, ref, watch } from 'vue';
    import useInventoryStore from '../stores/inventory'

    const useInventory = useInventoryStore()
    const searchText = ref({})
    onMounted(()=>{
        console.log("I am here in onMounted")
        useInventory.fetchProducts()
    })

    function updateName(product, updateName) {
        if(!updateName) return
        useInventory.updateProducts(product.id, updateName)
        searchText.value[product.id] = ""
    }
    watch(useInventory.products,()=>{
        useInventory.fetchProducts()
    })
    
</script>

<template>
    <div>
        <h1>Product View</h1>
        <p v-if="useInventory.isLoading">Loading...</p>

        <ul v-else>
            <li v-for="products in useInventory.products" :key="products">
                <p>{{ products.name }}</p>
                <input name="inputs" v-model="searchText[products.id]" placeholder="input text to edit" :disabled="useInventory.isLoading" />
                <v-btn class="bg-blue text-black text-sm px-3 py-1 rounded" :disabled="useInventory.isLoading" @click="updateName(products,searchText[products.id])">update name</v-btn>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>