import * as api from '../../../api/api';
import { message } from '@/utils/message';

export const login = async ({ commit }, userInfo) => {
     try {
          const { data } = await api.login(userInfo);
          if (data.statusCode == 200) {
               message('success', data.message, commit);
               localStorage.setItem('token', data.data.token)
          }
          if (data.data.token) {
               commit("setAuthenticated", data.data);
               commit("setSuccessPopup", data.message);
          } else {
               commit("setErrorPopup", data.message);
          }
     } catch(error) {
          console.log(error)
     } 
}

export const signUp = async (context, userInfo) => {
     try {
          await api.signUp(userInfo);
     } catch(error) {
          console.log(error)
     } 
}

export const forgetPassword = async ({ commit }, email) => {
     try {
          const { data } = await api.signUp(email);
          commit("setAuthenticated", data);
     } catch(error) {
          console.log(error)
     } 
}