import React, { useEffect, useState } from 'react'
import {
    useFileQuery,
    useFolderQuery,
    useUpdateFileMutation
} from '../../generated/graphql'
import { useDashboardContext } from '../contexts/DashboardContext'
import FileSwitcher from './FileSwitcher'
import dynamic from 'next/dynamic'
import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
})

const mdParser = new MarkdownIt()

interface MarkdownEditorProps {}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({}) => {
    const dashboardContext = useDashboardContext()
    const [updateFile] = useUpdateFileMutation()
    const { data } = useFolderQuery({
        variables: { id: dashboardContext?.selectedFolder ?? '' }
    })
    const { data: fileData } = useFileQuery({
        variables: { id: dashboardContext?.selectedFile ?? '' }
    })
    const [text, setText] = useState<string | undefined>(
        fileData?.file?.data?.text
    )

    const handleTextChange = ({ text }: { text: string }) => {
        setText(text.replace(/\d/g, ''))
        updateFile({
            variables: {
                id: dashboardContext?.selectedFile ?? '',
                text
            }
        })
    }

    useEffect(() => {
        setText(fileData?.file?.data?.text)
    }, [fileData?.file?.data?.id])

    return (
        <div className="flex items-start justify-start w-5/6 h-full z-10 absolute top-14 bg-gray-100">
            {data?.folder?.data && <FileSwitcher folder={data} />}
            {fileData?.file?.data && (
                <div className="relative mt-20 w-full mx-36">
                    <MdEditor
                        value={text}
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleTextChange}
                    />
                </div>
            )}
        </div>
    )
}

export default MarkdownEditor
