import React from 'react'
import Link from 'next/link'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
    const [{ data }] = useMeQuery()
    const [, logout] = useLogoutMutation()

    return (
        <div className="w-screen h-14 px-1 sm:px-16 flex justify-between items-center">
            <div>
                <h1>Alpine</h1>
            </div>
            <div className="flex justify-between items-center">
                {data && !data.me ? (
                    <>
                        <div className="focus:outline-none mr-6">
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        </div>
                        <div className="px-3 py-1 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none transition duration-500 ease">
                            <Link href="/register">
                                <a>Register</a>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mr-6">
                            <p>Hello {data?.me?.username}</p>
                        </div>
                        <button
                            className="px-3 py-1 rounded-lg font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none transition duration-500 ease"
                            onClick={async () => {
                                // ISSUE IS HERE
                                const response = await logout()

                                console.log(response)

                                if (response.data?.logout) {
                                    console.log('signed out. user: ', data?.me)
                                } else {
                                    console.log('signed out failed. user: ', data?.me)
                                }
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navigation
