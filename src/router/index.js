import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/welcome'
import Notify from '../views/notify/index'
import UserInfo from '../views/user-info/index'
import PassWd from '../views/passwd/index'
import LoginOut from '../views/login-out/index'
import FileSystem from '../views/file-system/index'

import TestTemplate from '../views/test-view/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'welcome',
      component:Welcome 
    },
    {
      path: '/notify',
      name: 'Notify',
      component: Notify
    },
    {
      path: '/user-info',
      name: 'user-info',
      component: UserInfo
    },
    {
      path: '/passwd',
      name: 'passwd',
      component: PassWd
    },
    {
      path: '/login-out',
      name: 'login-out',
      component: LoginOut
    },
    {
      path: '/file-system',
      name: 'file-system',
      component: FileSystem
    },
    {
      path: '/test-view',
      name: 'test-view',
      component: TestTemplate
    }
  ]
})
