import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
     companies: [],
     pagination: {}
}

export default {
     namespaced: true,
     state,
     getters,
     actions,
     mutations,
}