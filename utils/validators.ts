const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const usernameRegex: RegExp = /^[a-zA-Z\-]+$/

export const validateEmail = (email?: string): string | null => {
    if (!email) {
        return 'Email is a required field'
    } else if (!emailRegex.test(email)) {
        return 'Email not correctly formatted'
    }

    return null
}

export const validateUsername = (
    username?: string,
    minLength?: number
): string | null => {
    if (!username) {
        return 'Username is a required field'
    } else if (minLength && username.length < minLength) {
        return `Username is too small. ${minLength} minimum`
    } else if (!usernameRegex.test(username)) {
        return 'Username can only contain letters and hyphens'
    }

    return null
}

export const validatePassword = (
    password?: string,
    minLength?: number
): string | null => {
    if (!password) {
        return 'Password is a required field'
    } else if (minLength && password.length < minLength) {
        return `Password is too small. ${minLength} minimum`
    }

    return null
}
