import Vue from 'vue'
import Router from 'vue-router'
import TodoApp from '@/components/AnotherApp'
// import PageList from '@/pages/PageList'
import PageForm from '@/pages/PageForm'
import PageStupid from '@/pages/PageStupid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'TodoApp',
      component: TodoApp
    },
    {
      path: '/',
      name: 'PageForm',
      component: PageForm
    },
    {
      path: '/stupid',
      name: 'PageStupid',
      component: PageStupid
    }
  ]
})
