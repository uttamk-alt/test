import { defineStore } from "pinia";

interface Product{
    id: number,
    name: string,
    description?: string
}

const useInventoryStore = defineStore("inventory", {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
  }),
  actions: {
    async fetchProducts() {
      ((this.isLoading = true),
        await new Promise((res, rej) => setTimeout(res, 500)));

      this.products = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
      ];

      this.isLoading = false
    },
    async updateProducts(productId: number, updatedValue: string){
        this.products = this.products.map(p=>{
            if(p.id === productId){
                return {...p, name: updatedValue}
            }else {return p}
        })
    }
  },
});
export default useInventoryStore;