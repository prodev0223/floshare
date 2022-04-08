export const setCompanies = (state, companies) => {
    state.companies = companies;
}

export const addNewCompany = (state, company) => {
    state.companies.push(company);
}