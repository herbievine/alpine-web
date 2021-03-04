interface Errors {
    field: string
    message: string
}

interface Map {
    [key: string]: string
}

export const errorHandler = (errors: Errors[]): Map => {
    const errorMap: Record<string, string> = {}

    errors.forEach(({ field, message }) => errorMap[field] = message)

    return errorMap
}