export const message = (type, message, commit) => {
     if (type === 'success') {
          commit('setSuccessPopup', { bool: true, message: message });
     } else {
          commit('setErrorPopup', { bool: true, message: message });
     }
}