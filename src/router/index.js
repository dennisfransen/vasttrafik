import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Tickets from "@/views/Tickets"
import TravelPlanning from "@/views/TravelPlanning"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: 'Köp biljett'}
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets,
        meta: {title: 'Biljetter'}
    },
    {
        path: '/travel_planning',
        name: 'TravelPlanning',
        component: TravelPlanning,
        meta: {title: 'Reseplanering'}
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

