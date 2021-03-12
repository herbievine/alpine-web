import React, { useContext, useEffect } from 'react'
import { FaCaretRight, FaFolderPlus } from 'react-icons/fa'
import Popup from 'reactjs-popup'
import { useFoldersQuery } from '../../generated/graphql'
import { Dashboard, DashboardContext } from '../contexts/DashboardContext'
import DashboardPopup from '../messages/DashboardPopup'

interface DashboardLeftNavigationProps {}

const DashboardLeftNavigation: React.FC<DashboardLeftNavigationProps> = ({}) => {
    const { data } = useFoldersQuery()
    const folders = data?.folders.data

    const dashboardContext = useContext<Dashboard | null>(DashboardContext)

    useEffect(
        () =>
            dashboardContext?.setSelectedFolder(
                (folders && folders[0].id) ?? ''
            ),
        []
    )

    return (
        <div className="flex flex-col items-start justify-start w-1/6 h-full z-10 absolute top-14 bg-white shadow-xl rounded-tl-3xl">
            <div className="mt-12 w-full relative">
                <div className="mx-6 text-gray-700">
                    <div className="flex justify-between items-center text-sm uppercase font-bold">
                        <h2>Your Folders</h2>
                        <Popup
                            trigger={
                                <button className="bg-indigo-600 px-2 py-1 rounded-lg focus:outline-none">
                                    <FaFolderPlus color={'white'} />
                                </button>
                            }
                            position="right top"
                        >
                            {(close: any) => (
                                <DashboardPopup type="Folder" close={close} />
                            )}
                        </Popup>
                    </div>
                    {folders?.map((value, index) => {
                        const isSelected =
                            value.id === dashboardContext?.selectedFolder

                        return (
                            <div
                                onClick={() =>
                                    dashboardContext?.setSelectedFolder(
                                        value.id
                                    )
                                }
                                key={index}
                                className={`
                                    w-full relative flex justify-start items-center rounded-full mt-2 cursor-pointer
                                    ${
                                        isSelected
                                            ? 'bg-indigo-600 text-white'
                                            : ''
                                    }
                                    ${index === 0 ? 'mt-6' : ''}
                                `}
                            >
                                <p className="pl-4 py-1 rounded-full text-sm font-bold">
                                    {value.title}
                                </p>
                                <div className="ml-2">
                                    <FaCaretRight
                                        color={isSelected ? 'white' : 'black'}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DashboardLeftNavigation
