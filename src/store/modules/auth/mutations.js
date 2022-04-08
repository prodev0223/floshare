export const setAuthenticated = (state, user) => {
     state.authenticated = true;
     state.user = user;
}

export const subscription = (state, subscription) => {
     state.subscription = subscription
}