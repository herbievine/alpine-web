import React from 'react'
import FormLayout from '../components/layout/FormLayout'
import { Formik } from 'formik'
import FormikFormHelper from '../components/helpers/FormikFormHelper'
import { validateEmail, validatePassword } from '../utils/validators'
import { useLoginMutation } from '../generated/graphql'
import { errorHandler } from '../utils/errorHandler'
import { useRouter } from 'next/router'
import withApollo from '../utils/apolloWrapper'
import { FaRegEnvelope, FaLock } from 'react-icons/fa'

interface LoginProps {}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    email: ''
    password: ''
}

const Login: React.FC<LoginProps> = () => {
    const router = useRouter()
    const [login, { client }] = useLoginMutation()

    return (
        <FormLayout title="Login" description="Login with your email">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values: Values) => {
                    const errors: FormikErrors = {}

                    const emailValidation = validateEmail(values.email)
                    if (typeof emailValidation === 'string')
                        errors.email = emailValidation

                    const passwordValidation = validatePassword(
                        values.password,
                        6
                    )
                    if (typeof passwordValidation === 'string')
                        errors.password = passwordValidation

                    return errors
                }}
                onSubmit={async (values, { setErrors }) => {
                    const { data } = await login({ variables: values })

                    if (data?.login.errors) {
                        return setErrors(errorHandler(data.login.errors))
                    } else if (data?.login.user) {
                        await client.resetStore()
                        await router.push('/')
                    }
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
                                label: 'Email',
                                id: 'email',
                                placeholder: 'Enter your email',
                                icon: <FaRegEnvelope />
                            },
                            {
                                label: 'Password',
                                id: 'password',
                                placeholder: 'Enter your password',
                                icon: <FaLock />
                            }
                        ]}
                        submitText={'Login'}
                        forgotPassword={true}
                    />
                )}
            </Formik>
        </FormLayout>
    )
}

export default withApollo({ ssr: false })(Login)
