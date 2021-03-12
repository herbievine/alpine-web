import React, { ReactNode } from 'react'
import {
    FormikValues,
    FormikErrors,
    FormikTouched,
    FormikHandlers
} from 'formik'
import Link from 'next/link'
import { useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'

interface FormikFormHelperProps {
    handleSubmit: FormikHandlers['handleSubmit']
    handleChange: FormikHandlers['handleChange']
    handleBlur: FormikHandlers['handleBlur']
    values: FormikValues
    errors: FormikErrors<FormikValues>
    touched: FormikTouched<FormikValues>
    isSubmitting: boolean
    inputs: {
        label: string
        id: string
        placeholder: string
        icon: ReactNode
        help?: string
    }[]
    submitText: string
    forgotPassword?: boolean
}

const FormikFormHelper: React.FC<FormikFormHelperProps> = ({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
    inputs,
    submitText,
    forgotPassword
}) => {
    const [currentSelection, setCurrectSelection] = useState('')

    return (
        <form
            autoComplete="on"
            onSubmit={handleSubmit}
            className="flex flex-col justify-start items-center"
        >
            {[...inputs].map((value, index) => (
                <div
                    className={`
                        flex flex-col justify-start items-center
                        ${index === 0 ? '' : 'mt-4'}
                    `}
                    key={index}
                >
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-center">
                            <label htmlFor={value.id} className="text-sm">
                                {value.label}
                                <span className="text-red-500">*</span>
                            </label>
                            {value.help && (
                                <div className="ml-2" title={value.help}>
                                    <FaQuestionCircle size={12} />
                                </div>
                            )}
                        </div>
                        <p className="text-xs font-medium text-red-500">
                            {errors && touched[value.id] && errors[value.id]}
                        </p>
                    </div>
                    <div className="w-full flex items-center mt-1">
                        <div
                            className={`
                                py-2.5 px-4 border-t-2 border-l-2 border-b-2 rounded-l-lg
                                ${
                                    currentSelection === value.id
                                        ? 'border-blue-400'
                                        : 'border-gray-100'
                                }
                            `}
                        >
                            {value.icon}
                        </div>
                        <input
                            className="py-2 pr-4 text-sm sm:w-96 border-t-2 border-r-2 border-b-2 rounded-r-lg border-gray-100 focus:border-blue-400 focus:outline-none"
                            id={value.id}
                            type={value.id}
                            name={value.id}
                            placeholder={value.placeholder}
                            autoComplete={value.id}
                            onChange={handleChange}
                            onBlur={(event) => {
                                handleBlur(event)
                                setCurrectSelection('')
                            }}
                            onFocus={() => setCurrectSelection(value.id)}
                            value={values[value.id]}
                        />
                    </div>
                    {forgotPassword && value.id === 'password' && (
                        <div className="mt-2 w-full flex justify-end">
                            <Link href="/recovery">
                                <p className="text-xs font-medium text-gray-500 cursor-pointer">
                                    Forgot password?
                                </p>
                            </Link>
                        </div>
                    )}
                </div>
            ))}
            <button
                className="mt-4 px-6 py-2 rounded-lg font-medium text-white bg-indigo-600 focus:outline-none"
                type="submit"
                disabled={isSubmitting}
            >
                {submitText}
            </button>
        </form>
    )
}

export default FormikFormHelper
