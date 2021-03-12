import React from 'react'
import { useFolderQuery } from '../../generated/graphql'
import FileSwitcher from './FileSwitcher'

interface EditorProps {
    selectedFolder: string
}

const Editor: React.FC<EditorProps> = ({ selectedFolder }) => {
    const { data } = useFolderQuery({ variables: { id: selectedFolder } })

    return (
        <div className="flex flex-col items-start justify-start w-5/6 h-full z-10 absolute top-14 bg-gray-100">
            {data?.folder?.data && <FileSwitcher folder={data} />}
        </div>
    )
}

export default Editor
