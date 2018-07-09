import App from './App'
import { constantRouterMap } from './router'
import store from './store'
import _ from 'lodash'
import router from './router'


Vue.config.productionTip = false

Vue.prototype._ = _

import './permission'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
