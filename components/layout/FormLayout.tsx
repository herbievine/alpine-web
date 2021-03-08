import React from 'react'

interface FormLayout {
    title: string
    description?: string
}

const FormLayout: React.FC<FormLayout> = ({ children, title, description }) => {
    return (
        <div className="w-screen mt-16 md:mt-32 flex flex-col items-center justify-center">
            <div className="p-6 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-semibold">{title}</h2>
                {description && (
                    <h6 className="mt-4 text-md font-medium">{description}</h6>
                )}
                <div className="mt-12 w-max">{children}</div>
            </div>
        </div>
    )
}

export default FormLayout
