import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    routes:[
        {
        path: '/',
        component: Home
    },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/converter',
            component: () => import('./views/Converter.vue')
        },
        {
            path: '*',
            name: 'catchAll',
            component: Home
        }

    ]
})