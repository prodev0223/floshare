import * as api from '../../../api/api';

export const createAndUpdate = async (data) => {
     try {
          await api.createAndUpdateTemplate(data);
     } catch(error) {
          console.log(error)
     } 
}

export const getTemplateById = async ( id) => {
     try {
          await api.getTemplateById(id);
     } catch(error) {
          console.log(error)
     } 
}

export const templatesList = async () => {
     try {
          await api.getTemplates();
     } catch(error) {
          console.log(error)
     } 
}

export const deleteTemplate = async (id) => {
     try {
          await api.deleteTemplate(id);
     } catch(error) {
          console.log(error)
     } 
}

export const templatesPagination = async (data) => {
     try {
          await api.templatesPagination(data);
     } catch(error) {
          console.log(error)
     } 
}