import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import page1 from '@/components/page1'
import child1 from '@/components/child1'

Vue.use(Router)

export default new Router({
  // mode: 'history',//IIS上有问题
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1,
      children: [
        {
          path: 'child1',//嵌套路径
          //path:'/child1',//根路径
          component: child1
        }
        ]
    }
  ]
})
