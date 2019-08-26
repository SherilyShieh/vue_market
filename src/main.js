import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import interceptor from './interceptor'

// 执行拦截器初始化


Vue.config.productionTip = false

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

interceptor(app);