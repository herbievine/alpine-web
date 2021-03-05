import React from 'react'
import Link from 'next/link'

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({}) => {
    return (
        <div className="w-screen h-14 px-1 sm:px-16 flex justify-between items-center">
            <div>
                <h1>Alpine</h1>
            </div>
            <div className="flex justify-between items-center">
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
            </div>
        </div>
    )
}

export default Navigation