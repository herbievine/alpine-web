import React, { useState } from 'react'
import FormLayout from '../../components/layout/FormLayout'
import { Formik } from 'formik'
import FormikFormHelper from '../../components/helpers/FormikFormHelper'
import { validateEmail } from '../../utils/validators'
import { useForgotPasswordMutation } from '../../generated/graphql'
import FormMessage from '../../components/messages/FormMessage'
import { withApollo } from '../../utils/apolloWrapper'
import { FaRegEnvelope } from 'react-icons/fa'
import WithNavigation from '../../components/modules/Navigation'

interface IndexProps {}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    email: ''
}

const Index: React.FC<IndexProps> = () => {
    const [submitted, setSubmitted] = useState(false)
    const [forgotPassword] = useForgotPasswordMutation()

    return (
        <WithNavigation>
            {submitted ? (
                <FormMessage
                    variant="neutral"
                    title="Check your inbox"
                    message="
                        Check your inbox for the next steps. If you don't
                        receive an email, and it's not in your spam folder
                        this could mean you signed up with a different
                        email address.
                    "
                />
            ) : (
                <FormLayout
                    title="Recover password"
                    description="Enter your email to get started"
                >
                    <Formik
                        initialValues={{ email: '' }}
                        validate={(values: Values) => {
                            const errors: FormikErrors = {}

                            const emailValidation = validateEmail(values.email)
                            if (typeof emailValidation === 'string')
                                errors.email = emailValidation

                            return errors
                        }}
                        onSubmit={async (values) => {
                            const response = await forgotPassword({
                                variables: values
                            })

                            if (response?.data?.forgotPassword) {
                                setSubmitted(true)
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
                                    }
                                ]}
                                submitText={'Submit'}
                            />
                        )}
                    </Formik>
                </FormLayout>
            )}
        </WithNavigation>
    )
}

export default withApollo({ ssr: false })(Index)
