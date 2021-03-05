import React from 'react'
import {
    FormikValues,
    FormikErrors,
    FormikTouched,
    FormikHandlers
} from 'formik'

interface FormikFormHelper {
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
    }[]
    submitText: string
}

const FormikFormHelper: React.FC<FormikFormHelper> = (props) => {
    return (
        <form
            autoComplete="on"
            onSubmit={props.handleSubmit}
            className="flex flex-col justify-start items-center"
        >
            {[...props.inputs].map((value, index) => (
                <div
                    className={`
                        flex flex-col justify-start items-center
                        ${index === 0 ? '' : 'mt-4'}
                    `}
                    key={index}
                >
                    <div className="w-full flex justify-between items-center">
                        <label htmlFor={value.id} className="text-sm">
                            {value.label}
                            <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs font-medium text-red-500">
                            {props.errors &&
                                props.touched[value.id] &&
                                props.errors[value.id]}
                        </p>
                    </div>
                    <input
                        className="py-1 px-3 mt-1 rounded-md bg-gray-100 sm:w-96 focus:outline-none focus:ring focus:border-blue-400"
                        id={value.id}
                        type={value.id}
                        name={value.id}
                        autoComplete={value.id}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values[value.id].toLowerCase()}
                    />
                </div>
            ))}
            <button
                className="mt-4 px-6 py-2 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none transition duration-500 ease"
                type="submit"
                disabled={props.isSubmitting}
            >
                {props.submitText}
            </button>
        </form>
    )
}

export default FormikFormHelper
