import Link from 'next/link'
import React from 'react'
import { useMeQuery } from '../../generated/graphql'

interface DashboardNavigationProps {}

const DashboardNavigation: React.FC<DashboardNavigationProps> = ({}) => {
    const { data } = useMeQuery()

    return (
        <div className="h-24">
            <div className="pt-4 px-6 w-full flex justify-between items-center">
                <div className="cursor-pointer">
                    <Link href="/">
                        <img
                            width={100}
                            src="/images/logo.svg"
                            alt="Loop Logo"
                        />
                    </Link>
                </div>
                {data?.me && (
                    <div className="text-sm text-white font-bold">
                        Hello {data.me.username}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DashboardNavigation
