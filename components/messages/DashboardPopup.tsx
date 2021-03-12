import { Formik, FormikErrors as ActualFormikErrors } from 'formik'
import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import {
    useCreateFolderMutation,
    useCreateFileMutation
} from '../../generated/graphql'
import { errorHandler } from '../../utils/errorHandler'
import { validateFolderOrFile } from '../../utils/validators'

interface DashboardPopupProps {
    close: any
    type: 'File' | 'Folder'
    folderId?: string
}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    title: ''
}

const DashboardPopup: React.FC<DashboardPopupProps> = ({
    close,
    type,
    folderId
}) => {
    const [createFolder, { client: folderClient }] = useCreateFolderMutation()
    const [createFile, { client: fileClient }] = useCreateFileMutation()

    const submiteFolderOrFile = async (
        values: Values,
        setErrors: (errors: ActualFormikErrors<Values>) => void
    ) => {
        if (type.toLowerCase() === 'folder') {
            const { data } = await createFolder({
                variables: values
            })

            if (data?.createFolder?.errors) {
                return setErrors(
                    errorHandler([
                        {
                            field: 'title',
                            message: data.createFolder.errors[0].message
                        }
                    ])
                )
            } else if (data?.createFolder?.data) {
                close()
                await folderClient.resetStore()
            }
        } else {
            const { data } = await createFile({
                variables: {
                    ...values,
                    id: folderId ?? ''
                }
            })

            if (data?.createFile?.errors) {
                return setErrors(
                    errorHandler([
                        {
                            field: 'title',
                            message: data.createFile.errors[0].message
                        }
                    ])
                )
            } else if (data?.createFile?.data) {
                close()
                await fileClient.resetStore()
            }
        }
    }

    return (
        <div className="flex flex-col justify-center z-20 bg-indigo-600 text-white rounded-xl items-center absolute">
            <div className="w-full flex justify-between items-center px-3 pt-2">
                <p className="whitespace-nowrap mr-4 text-sm uppercase font-bold">
                    Create a new {type.toLowerCase()}
                </p>
                <button onClick={close} className="focus:outline-none">
                    <FaTimes color={'ffffff'} />
                </button>
            </div>
            <div className="flex flex-col justify-start items-center px-4 pt-6 pb-4">
                <Formik
                    initialValues={{ title: '' }}
                    validate={(values: Values) => {
                        const errors: FormikErrors = {}

                        const titleValidation = validateFolderOrFile(
                            values.title,
                            type
                        )
                        if (typeof titleValidation === 'string')
                            errors.title = titleValidation

                        return errors
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        await submiteFolderOrFile(values, setErrors)
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        errors,
                        touched,
                        isSubmitting
                    }) => (
                        <form autoComplete="on" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder={`${type} name`}
                                className="px-4 py-2 rounded-lg focus:outline-none text-gray-700 bg-gray-200"
                                onChange={handleChange}
                                id="title"
                                name="title"
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            <p className="text-xs font-bold text-red-500 mt-1">
                                {errors && touched.title && errors.title}
                            </p>
                            <button
                                className="mt-4"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Create
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default DashboardPopup
