import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./views/Index.vue'),
    },
    {
        path: '/tatooine',
        name: 'Tatooine',
        component: () => import('./views/Tatooine.vue'),
    },
]

const router = createRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    history: createWebHistory(),
})


export default router;