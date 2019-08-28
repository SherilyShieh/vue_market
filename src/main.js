import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import interceptor from './interceptor'
import CartAnim from '@/components/CartAnim.vue';
import { createAPI } from 'cube-ui';
import create from './utils/create'
// 执行拦截器初始化


Vue.config.productionTip = false
Vue.prototype.$create = create;
// 给vue注册实例方法，方法名$createCartAnim
createAPI(Vue, CartAnim, ['transitionend'])

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

interceptor(app);