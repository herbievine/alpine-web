import React from 'react'
import { FaCheck, FaTimes, FaExclamationCircle } from 'react-icons/fa'

interface FormMessageProps {
    variant: 'success' | 'error' | 'warning'
    title?: string
    message: string
}

const FormMessage: React.FC<FormMessageProps> = ({
    variant,
    title,
    message
}) => {
    const theme =
        variant === 'success'
            ? 'bg-green-200'
            : variant === 'error'
            ? 'bg-red-200'
            : 'bg-yellow-200'

    const icon =
        variant === 'success' ? (
            <FaCheck className="mr-2" />
        ) : variant === 'error' ? (
            <FaTimes className="mr-2" />
        ) : (
            <FaExclamationCircle className="mr-2" />
        )

    return (
        <div className="w-screen mt-24 md:mt-32 flex flex-col items-center justify-center">
            <div
                className={`
                    w-10/12 sm:w-1/2 md:w-4/12 rounded-xl p-8
                    ${theme}
                `}
            >
                {title && (
                    <div className="mb-2 flex items-center justify-start">
                        {icon}
                        {title}
                    </div>
                )}
                <p>{message}</p>
            </div>
        </div>
    )
}

export default FormMessage
