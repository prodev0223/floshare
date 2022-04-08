import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
     authenticate: false,
     user: {},
     subscription: {}
}

export default {
     state,
     getters,
     actions,
     mutations,
}