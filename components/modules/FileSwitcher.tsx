import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Popup from 'reactjs-popup'
import { FolderQuery, useFilesQuery } from '../../generated/graphql'
import { useDashboardContext } from '../contexts/DashboardContext'
import DashboardPopup from '../messages/DashboardPopup'
import FileCard from './FileCard'

interface FileSwitcherProps {
    folder: FolderQuery
}

const FileSwitcher: React.FC<FileSwitcherProps> = ({ folder }) => {
    const { data } = useFilesQuery({
        variables: { id: folder.folder?.data?.id ?? '' }
    })
    const files = data?.files?.data

    const dashboardContext = useDashboardContext()

    useEffect(() => dashboardContext?.setSelectedFile(''), [])

    return (
        <div className="mt-11 text-gray-700 w-96">
            <div className="ml-6 text-xl font-semibold ">
                <h2>{folder.folder?.data?.title}</h2>
            </div>
            <div className="ml-6 mt-8 absolute">
                {files && (
                    <>
                        {files.map((value) => {
                            return (
                                <div
                                    key={value.id}
                                    onClick={() =>
                                        dashboardContext?.setSelectedFile(
                                            value.id
                                        )
                                    }
                                >
                                    <FileCard
                                        key={value.id}
                                        selectedId={
                                            dashboardContext?.selectedFile
                                        }
                                        file={value}
                                    />
                                </div>
                            )
                        })}
                    </>
                )}
                <Popup
                    trigger={
                        <div className="py-4 px-4 w-72 bg-white flex justify-start items-center rounded-lg shadow-lg relative cursor-pointer">
                            <p className="ml-3 mr-4 text-sm font-bold">
                                Create new document
                            </p>
                            <FaPlus size={14} />
                        </div>
                    }
                    position="right top"
                >
                    {(close: any) => (
                        <DashboardPopup
                            type="File"
                            folderId={folder.folder?.data?.id}
                            close={close}
                        />
                    )}
                </Popup>
            </div>
        </div>
    )
}

export default FileSwitcher
