import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home from '@/pages/home'
import openOrder from '@/pages/order/openOrder'
import changeOrder from '@/pages/order/changeOrder'
import shopOrder from '@/pages/order/shopOrder'
import orderSetting from '@/pages/order/orderSetting'
import displaceOrder from  '@/pages/order/displaceOrder'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录',
            component: login,
        },
        {
            path: '/',
            name: 'home',
            component: home,
            redirect:'/openOrder',
            children:[
                {
                    path: '/openOrder',
                    name: '开户订单',
                    component: openOrder,
                },  {
                    path: '/changeOrder',
                    name: '换气订单',
                    component: changeOrder,
                },
                {
                    path: '/displaceOrder',
                    name: '置换订单',
                    component: displaceOrder,
                },
                {
                    path: '/shopOrder',
                    name: '商城订单',
                    component: shopOrder,
                },
                {
                    path: '/orderSetting',
                    name: '订单设置',
                    component: orderSetting,
                }
            ]
        },
    ]
})
