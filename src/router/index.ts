import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/home/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/book-viewer',
            name: 'pdf-viewer',
            component: () => import('../components/PdfViewer.vue')
        }
    ]
})

export default router
