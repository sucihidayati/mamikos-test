import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'

import SearchFilter from '@/components/SearchFilter'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'SearchFilter',
      component: SearchFilter
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
  ]
})
