const state = {
    isLoading: false
}

const mutations = {
    setLoading(state, flag) {
        state.isLoading = flag;
    }
}

export default {
    state,
    mutations
}