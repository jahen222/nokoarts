import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Services from '@/components/services/index'
import Design from '@/components/services/design'
import Technology from '@/components/services/technology'
import Marketing from '@/components/services/marketing'
import Solutions from '@/components/solutions/index'
import Gdd from '@/components/solutions/gdd'
import Inbound from '@/components/solutions/inbound'
import Work from '@/components/work/index'
import WorkHome from '@/components/work/home'
import Artsi from '@/components/work/projects/artsi'
import Glife from '@/components/work/projects/1glife'
import Pur from '@/components/work/projects/pur'

import ERROR from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/services',
      component: Services,
      children: [
        {
          path: '',
          name: 'services',
          component: Design
        },
        {
          path: 'design',
          name: 'design',
          component: Design
        },
        {
          path: 'technology',
          name: 'technology',
          component: Technology
        },
        {
          path: 'marketing',
          name: 'marketing',
          component: Marketing
        },
        {
          path: '*',
          name: '404',
          component: ERROR
        }
      ]
    },
    {
      path: '/solutions',
      component: Solutions,
      children: [
        {
          path: '',
          name: 'solutions',
          component: Gdd
        },
        {
          path: 'gdd',
          name: 'gdd',
          component: Gdd
        },
        {
          path: 'inbound',
          name: 'inbound',
          component: Inbound
        },
        {
          path: '*',
          name: '404',
          component: ERROR
        }
      ]
    },
    {
      path: '/work',
      component: Work,
      children: [
        {
          path: '',
          name: 'work',
          component: WorkHome
        },
        {
          path: 'artszi',
          name: 'artszi',
          component: Artsi
        },
        {
          path: '1glife',
          name: '1glife',
          component: Glife
        },
        {
          path: 'pur',
          name: 'pur',
          component: Pur
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: ERROR
    }
  ]
})
