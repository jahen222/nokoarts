import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
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
  scrollBehavior (to, from, savedPosition) {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      return position
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      component: Services,
      children: [
        {
          path: 'design',
          name: 'design',
          component: Design
        },
        {
          path: 'marketing',
          name: 'marketing',
          component: Marketing
        },
        {
          path: 'technology',
          name: 'technology',
          component: Technology
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
