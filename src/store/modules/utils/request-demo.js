import * as api from '@/api/api';
import { message } from '@/utils/message'

const state = {
     popupOpen: false
}

const actions = {
     async saveRequests({ commit }, requests) {
               commit('setLoading', true);
               const { data } = await api.requests(requests);
               if (data.statusCode == 200) {
                    message('success', data.message, commit);
                    commit('offModal');
               }

               console.data(data);
               
               // message('error', error, commit);
          commit('setLoading', false);
     }
}

const mutations = {
     requestDemoModal(state) {
          state.popupOpen = true
     },
     offModal(state) {
          state.popupOpen = false
     }
}

export default {
     state,
     actions,
     mutations
}