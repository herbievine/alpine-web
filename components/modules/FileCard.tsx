import React from 'react'
import dayjs from 'dayjs'
import { useDeleteFileMutation } from '../../generated/graphql'
import { FaTrashAlt } from 'react-icons/fa'

interface FileCardProps {
    file: {
        id: string
        updatedAt: string
        title: string
        text: string
    }
    selectedId: string | undefined
}

const FileCard: React.FC<FileCardProps> = ({ file, selectedId }) => {
    const [deleteFile, { client }] = useDeleteFileMutation()
    const date = dayjs(file.updatedAt).format('DD/MM/YYYY')

    return (
        <div className="flex justify-start items-center mb-4 w-72 bg-white rounded-lg shadow-lg relative cursor-pointer">
            <div
                className={`
                    h-20 w-3 relative rounded-l-lg
                    ${selectedId === file.id ? 'bg-indigo-600' : ''}
                `}
            />
            <div className="py-4 px-4 flex justify-between items-center">
                <div className="flex flex-col justify-center align-start text-sm font-bold">
                    <p>{file.title}</p>
                    <p className="text-xs">Last updated: {date.toString()}</p>
                </div>
            </div>
            <div className="flex-grow flex justify-end pr-4">
                <div
                    title="Delete File"
                    onClick={async () => {
                        deleteFile({
                            variables: { id: file.id }
                        })

                        await client.resetStore()
                    }}
                    className="p-4"
                >
                    <FaTrashAlt color={'#D9463D'} />
                </div>
            </div>
        </div>
    )
}

export default FileCard
