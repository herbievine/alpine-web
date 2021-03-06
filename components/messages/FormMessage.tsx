import React, { ReactNode } from 'react'
import {
    FaCheck,
    FaTimes,
    FaExclamationCircle,
    FaRegComment
} from 'react-icons/fa'

interface FormMessageProps {
    variant: 'success' | 'error' | 'warning' | 'neutral'
    title: string
    message: string
}

const FormMessage: React.FC<FormMessageProps> = ({
    variant,
    title,
    message
}) => {
    let theme: string
    let icon: ReactNode

    if (variant === 'success') {
        theme = 'bg-green-200'
        icon = <FaCheck className="mr-2" />
    } else if (variant === 'warning') {
        theme = 'bg-yellow-200'
        icon = <FaExclamationCircle className="mr-2" />
    } else if (variant === 'error') {
        theme = 'bg-red-200'
        icon = <FaTimes className="mr-2" />
    } else {
        theme = 'bg-gray-200'
        icon = <FaRegComment className="mr-2" />
    }

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
