export const xssFilter = (str: string) => {
    if (typeof str !== 'string') return ''

    return str.replace(/(&|\$|{|}|\\|\<|>|)/g, '')
}
