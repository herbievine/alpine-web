import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
    const { data, client } = useMeQuery()
    const [logout] = useLogoutMutation()
    const router = useRouter()

    return (
        <div className="w-screen h-14 px-1 sm:px-16 flex justify-between items-center">
            <div>
                <Link href="/">
                    <p>Alpine</p>
                </Link>
            </div>
            {data && (
                <div className="flex justify-between items-center">
                    {!data.me ? (
                        <>
                            <div className="focus:outline-none mr-6">
                                <Link href="/login">
                                    <p>Login</p>
                                </Link>
                            </div>
                            <div className="px-3 py-1 rounded-lg font-medium text-white bg-blue-400 hover:bg-blue-500 focus:outline-none transition duration-500 ease">
                                <Link href="/register">
                                    <p>Register</p>
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
                                    const response = await logout()

                                    if (response?.data?.logout) {
                                        await client.resetStore()
                                        await router.push('/login')
                                    }
                                }}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default Navigation
