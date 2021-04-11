import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */"../views/Home.vue")
  },
  {
    path: '/MainPage',
    name: 'mainpage',
    component: () => import(/* webpackChunkName: "home" */"../views/MainPage.vue")
  },
  {
    path: '/QRCode',
    name: 'qrcode',
    component: () => import(/* webpackChunkName: "home" */"../views/QRCode.vue")
  },
  {
    path: '/SubmitForm',
    name: 'SubmitForm',
    component: () => import(/* webpackChunkName: "home" */"../views/SubmitForm.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
