import actions from './actions'
import getters from './getters'

const state = {
  pwdUuid: '',
}

export default new Vuex.Store({
  state,
  getters,
  actions
})
