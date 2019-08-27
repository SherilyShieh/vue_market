import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                auth: true
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // 需要登录
    if (to.meta.auth) {
        const token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next({
                path: "login",
                query: { redirect: to.path }
            });
        }
    } else { // 不需要登录
        next();
    }
})

export default router;