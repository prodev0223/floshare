export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@'"]+(\.[^<>()[\]\\.,;:\s@'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validatePhoneNumber = (phoneNumber) => {
    const re = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
    return re.test(String(phoneNumber));
}

export const validateUserNum = (userNum) => {
    const re = /^([1-9]{1,5})?$/;
    return re.test(String(userNum));
}

export const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(String(password));
}

