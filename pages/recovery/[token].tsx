import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Formik } from 'formik'
import FormikFormHelper from '../../components/helpers/FormikFormHelper'
import FormLayout from '../../components/layout/FormLayout'
import { validatePassword } from '../../utils/validators'
import { useChangePasswordMutation } from '../../generated/graphql'
import { errorHandler } from '../../utils/errorHandler'
import FormMessage from '../../components/messages/FormMessage'
import { withApollo } from '../../utils/apolloWrapper'
import { FaLock } from 'react-icons/fa'
import WithNavigation from '../../components/modules/Navigation'

interface TokenProps {}

type FormikErrors = {
    [key: string]: string
}

type Values = {
    password: ''
}

const Token: React.FC<TokenProps> = ({}) => {
    const [tokenError, setTokenError] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const router = useRouter()
    const token: string = router.query.token as string
    const [changePassword] = useChangePasswordMutation()

    return (
        <WithNavigation>
            {submitted ? (
                <FormMessage
                    variant="success"
                    title="Password updated"
                    message="Your password has been updated."
                />
            ) : (
                <>
                    {tokenError ? (
                        <FormMessage
                            variant="error"
                            title="Expired or invalid token"
                            message="
                                The token you provided is either expired or invalid. 
                                If this error persists, go to login and follow the 
                                forgotten password guide.
                            "
                        />
                    ) : (
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
                                onSubmit={async (values, { setErrors }) => {
                                    const { password } = values

                                    const { data } = await changePassword({
                                        variables: {
                                            password,
                                            token
                                        }
                                    })

                                    if (data?.changePassword.errors) {
                                        if (
                                            data.changePassword.errors[0]
                                                .field === 'token'
                                        ) {
                                            return setTokenError(true)
                                        } else {
                                            return setErrors(
                                                errorHandler(
                                                    data.changePassword.errors
                                                )
                                            )
                                        }
                                    } else {
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
                                                label: 'Password',
                                                id: 'password',
                                                placeholder:
                                                    'Enter a new password',
                                                icon: <FaLock />
                                            }
                                        ]}
                                        submitText={'Submit'}
                                    />
                                )}
                            </Formik>
                        </FormLayout>
                    )}
                </>
            )}
        </WithNavigation>
    )
}

export default withApollo({ ssr: false })(Token)
