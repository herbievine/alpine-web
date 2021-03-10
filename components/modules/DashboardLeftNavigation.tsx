import React, { useState } from 'react'
import { FaFolderPlus } from 'react-icons/fa'
import { useFoldersQuery } from '../../generated/graphql'

interface DashboardLeftNavigationProps {}

const DashboardLeftNavigation: React.FC<DashboardLeftNavigationProps> = ({}) => {
    const { data } = useFoldersQuery()
    const folders = data?.folders.data

    const [selected, setSelected] =
        useState<number | undefined>(data?.folders.data?.length) ?? 0

    return (
        <div className="flex flex-col items-start justify-start w-1/6 h-full z-10 absolute top-14 bg-white rounded-tl-3xl">
            <div className="mt-12 w-full relative">
                <div className="mx-6">
                    <div className="flex justify-between items-center">
                        <h2>Your Folders</h2>
                        <button>
                            <FaFolderPlus />
                        </button>
                    </div>
                    {folders?.map((value, index) => {
                        return (
                            <p
                                key={index}
                                className={`
                                    pl-4 py-1 mt-2 rounded-full cursor-pointer
                                    ${
                                        index === selected
                                            ? 'bg-indigo-600 text-white'
                                            : ''
                                    }
                                `}
                                onClick={() => setSelected(index)}
                            >
                                {value.title} here
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardLeftNavigation
