// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'src/App'
import VueResource from 'vue-resource'
import router from 'src/router/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'

Vue.use(VueResource)

// sync store and router state
sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
