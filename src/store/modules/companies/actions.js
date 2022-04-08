import * as api from '@/api/api';

export const createAndUpdate = async ({ commit }, data) => {
     try {
          const { company } = await api.createAndUpdateCompany(data);
          commit('addNewCompany', company)
     } catch(error) {
          console.log(error)
     } 
}

export const getCompanyById = async ( id) => {
     try {
          await api.getCompanyById(id);
     } catch(error) {
          console.log(error)
     } 
}

export const companiesList = async () => {
     try {
          await api.getCompanies();
     } catch(error) {
          console.log(error)
     } 
}

export const deleteCompany = async (id) => {
     try {
          await api.deleteCompany(id);
     } catch(error) {
          console.log(error)
     } 
}

export const companiesPagination = async (data) => {
     try {
          await api.companiesPagination(data);
     } catch(error) {
          console.log(error)
     } 
}

// export const recentCompanies = async () => {
//     try {
//         await api.recentCompanies();
//     } catch(error) {
//         console.log(error)
//     }
// }