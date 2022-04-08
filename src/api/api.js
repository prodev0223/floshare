import axios from 'axios';

const api = axios.create({
     baseURL: 'https://floshare.microlent.com'
});

//---------------------Request-Demo-----------------------//
export const requests = async (requests) => await api.post('request-demo/create-and-update', requests);

//----------------------Auth------------------------------//
export const login = async (userInfo) => await api.post('auth/login', userInfo);
export const signUp = async (userInfo) => await api.post('auth/signUp', userInfo);
export const fogetPassword = async (email) => await api.get(`auth/forget-password?email=${email}`);
export const resetPassword = async (data) => await api.post('auth/reset-password', data);

//---------------------Templates------------------------//
export const createAndUpdateTemplate = async (data) => await api.post('templates/create-and-update', data);
export const getTemplateById = async (id) => await api.get(`templates/get-by-id/${id}`);
export const getTemplates = async () => await api.get('templates/get-list');
export const deleteTemplate = async (id) => await api.get(`templates/delete/${id}`);
export const templatesPagination = async (data) => await api.post('templates/pagination', data);

//----------------------Companies-----------------------//
export const createAndUpdateCompany = async (data) => await api.post('company/create-and-update', data);
export const getCompanyById = async (id) => await api.get(`company/get-by-id/${id}`);
export const getCompanies = async () => await api.get('company/get-list');
export const deleteCompany = async (id) => await api.get(`company/delete/${id}`);
export const companiesPagination = async (data) => await api.post('company/pagination', data);