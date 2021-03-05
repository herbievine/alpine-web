interface Errors {
    field: string
    message: string
}

interface Map {
    [key: string]: string
}

export const errorHandler = (errors: Errors[]): Map => {
    return errors.reduce((acc: Map, { field, message }): Record<
        string,
        string
    > => {
        acc[field] = message
        return acc
    }, {})
}
