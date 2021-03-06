import { useRouter } from 'next/router'
import React from 'react'
import { Formik } from 'formik'
import FormikFormHelper from '../../components/helpers/FormikFormHelper'
import FormLayout from '../../layout/FormLayout'
import { validatePassword } from '../../utils/validators'

interface TokenProps {}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    password: ''
}

const Token: React.FC<TokenProps> = ({}) => {
    const router = useRouter()
    const { token } = router.query

    console.log(token)

    return (
        <FormLayout
            title="Reset password"
            description="Enter your new password"
        >
            <Formik
                initialValues={{ password: '' }}
                validate={(values: Values) => {
                    const errors: FormikErrors = {}

                    const passwordValidation = validatePassword(
                        values.password,
                        6
                    )
                    if (typeof passwordValidation === 'string')
                        errors.password = passwordValidation

                    return errors
                }}
                onSubmit={async (values) => {
                    console.log(values)

                    // const response = await forgotPassword({
                    //     variables: values
                    // })

                    // if (response?.data?.forgotPassword) {
                    //     setSubmitted(true)
                    // }
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
                    <FormikFormHelper
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                        isSubmitting={isSubmitting}
                        inputs={[
                            {
                                label: 'Password',
                                id: 'password'
                            }
                        ]}
                        submitText={'Submit'}
                    />
                )}
            </Formik>
        </FormLayout>
    )
}

export default Token
