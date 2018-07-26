import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Videos from '../components/videos/all.vue'
import Single from '../components/videos/single.vue'
import Login from '../components/auth/login.vue'
import Permissions from '../components/auth/permission.vue'

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home',
            },
        },
        {
            path: '/hello',
            component: HelloWorld,
            meta: {
                title: 'Hello World',
            },
        },
        {
            path: '/counter',
            component: Counter,
            meta: {
                title: 'Counter',
            },
        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: 'Login',
            },
        },
        {
            path: '/videos',
            component: Videos,
            meta: {
                title: 'Videos',
            },
        },
        {
            path: '/single',
            component: Single,
            meta: {
                title: 'Single',
            },
        },
        {
            path: '/permissions',
            component: Permissions,
            meta: {
                title: 'Permissions',
            },
        },
        {path: '*', redirect: '/home'},
    ],
});

router.replace('/home');

module.exports = router;
