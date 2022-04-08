const state = {
     successPopup: false,
     errorPopup: false,
     message: ''
}

const mutations = {
     setSuccessPopup(state, data) {
          state.successPopup = data.bool,
          state.message = data.message
     },
     setErrorPopup(state, data) {
          state.errorPopup = data.bool,
          state.message = data.message
     }
}

export default {
     state,
     mutations
}