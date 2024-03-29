import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import store from './store/users.js'
import Cookies from 'js-cookie'

import '@/styles/index.scss' // global css

Vue.use(ElementUI, { locale })

// router.beforeEach((to, from, next) => {
//   console.log('======    to     ======')
//   console.log(to)
//   console.log('======    to     ======')

//   console.log('======    from     ======')
//   console.log(from)
//   console.log('======    from     ======')

//   if (Cookies.get('token')) {

//     if (to.path === '/login') {
//       next({ path: `/` })
//     } else {
//       next()
//     }

//   } else {
//     if (to.path !== '/login') {
//       // next({path:'/login'})
//       next({path:`/login?redirect=${to.path}`})
//     } else {
//       next()
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
