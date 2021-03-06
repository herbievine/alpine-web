import React from 'react'
import FormLayout from '../components/layout/FormLayout'
import { Formik } from 'formik'
import FormikFormHelper from '../components/helpers/FormikFormHelper'
import {
    validateEmail,
    validateUsername,
    validatePassword
} from '../utils/validators'
import { useRegisterMutation } from '../generated/graphql'
import { errorHandler } from '../utils/errorHandler'
import { useRouter } from 'next/router'
import { withApollo } from '../utils/apolloWrapper'
import { FaLock, FaRegEnvelope, FaUser } from 'react-icons/fa'
import WithNavigation from '../components/modules/Navigation'
import { isAuthenticated } from '../middleware/isAuthenticated'

interface RegisterProps {}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    email: ''
    username: ''
    password: ''
}

const Register: React.FC<RegisterProps> = () => {
    isAuthenticated()
    const router = useRouter()
    const [register, { client }] = useRegisterMutation()

    return (
        <WithNavigation>
            <FormLayout title="Register" description="Register with your email">
                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    validate={(values: Values) => {
                        const errors: FormikErrors = {}

                        const emailValidation = validateEmail(values.email)
                        if (typeof emailValidation === 'string')
                            errors.email = emailValidation

                        const usernameValidation = validateUsername(
                            values.username,
                            4
                        )
                        if (typeof usernameValidation === 'string')
                            errors.username = usernameValidation

                        const passwordValidation = validatePassword(
                            values.password,
                            6
                        )
                        if (typeof passwordValidation === 'string')
                            errors.password = passwordValidation

                        return errors
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const { data } = await register({ variables: values })

                        if (data?.register.errors) {
                            return setErrors(errorHandler(data.register.errors))
                        } else if (data?.register.user) {
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
                                    label: 'Username',
                                    id: 'username',
                                    placeholder: 'Enter a username or name',
                                    icon: <FaUser />,
                                    help:
                                        "Won't be displayed anywhere else. Only you can see this."
                                },
                                {
                                    label: 'Password',
                                    id: 'password',
                                    placeholder: 'Enter your password',
                                    icon: <FaLock />
                                }
                            ]}
                            submitText={'Register'}
                        />
                    )}
                </Formik>
            </FormLayout>
        </WithNavigation>
    )
}

export default withApollo({ ssr: false })(Register)
