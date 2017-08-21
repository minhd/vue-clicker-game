
import VueRouter from 'vue-router'
import Vue from 'vue'
import Game from 'src/pages/Game'
import Achievements from 'src/pages/Achievements'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'game',
  component: Game
}, {
  path: '/achievements',
  name: 'achievements',
  component: Achievements
}]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

var router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes,
  linkActiveClass: 'active'
})

export default router
