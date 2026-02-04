import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import ProductView from "../components/ProductView.vue";

const route = [
    {
        path: "/home",
        name: "Home View",
        component: HomeView
    },
    {
        path: "/products",
        name: "Product View",
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: route,
})


export default router;
