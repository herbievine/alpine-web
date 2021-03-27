import React, { useEffect, useState } from 'react'
import {
    useFileQuery,
    useFolderQuery,
    useUpdateFileMutation
} from '../../generated/graphql'
import { useDashboardContext } from '../contexts/DashboardContext'
import FileSwitcher from './FileSwitcher'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { xssFilter } from '../../utils/xssHandler'

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

    const handleTextChange = (event: any) => {
        setText(xssFilter(event.target.value))
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
                <div className="flex items-start justify-between p-6 rounded-lg relative mt-20 w-full mx-36 shadow-lg bg-white">
                    <div className="flex-1 mr-6">
                        <div className="w-full border-b-2 text-lg font-bold mb-6 border-gray-200">
                            <h3>Text</h3>
                        </div>
                        <textarea
                            className="w-full h-96 focus:outline-none"
                            value={text}
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="w-full flex items-center justify-between border-b-2 text-lg font-bold mb-6 border-gray-200">
                            <h3>Markdown</h3>
                            <a
                                className="text-xs font-medium"
                                target="_blank"
                                href="https://www.markdownguide.org/cheat-sheet/"
                                rel="nofollow"
                            >
                                Need help with Markdown?
                            </a>
                        </div>
                        {/* @ts-ignore */}
                        <ReactMarkdown
                            className="default"
                            plugins={[gfm]}
                            children={text}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MarkdownEditor
