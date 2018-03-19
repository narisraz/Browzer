import Events from '@/components/Events'
import Memories from '@/components/Memories'
import Moments from '@/components/Moments'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/memories',
      name: 'Memories',
      component: Memories
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/moments',
      name: 'Moments',
      component: Moments
    }
  ]
})
