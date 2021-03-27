import withApollo from '../utils/apolloWrapper'
import React, { useState } from 'react'
import WithNavigation from '../components/modules/Navigation'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
    const [text, setText] = useState<string>('#### Try me')

    const handleTextChange = (event: any) => {
        setText(event.target.value.replace(/\d/g, ''))
    }

    return (
        <WithNavigation>
            <div className="w-full flex flex-col mt-24 justify-between items-center">
                <div className="flex flex-col items-center text-lg sm:text-2xl font-bold">
                    <p>A place to store notes using Markdown</p>
                </div>
                <div className="mt-12 p-6 rounded-lg shadow-lg flex flex-col">
                    <div>
                        <textarea
                            className="w-full h-24 focus:outline-none"
                            value={text}
                            onChange={handleTextChange}
                        />
                    </div>
                    <div>
                        {/* @ts-ignore */}
                        <ReactMarkdown
                            className="default"
                            plugins={[gfm]}
                            children={text}
                        />
                    </div>
                </div>
            </div>
        </WithNavigation>
    )
}

export default withApollo({ ssr: true })(Index)
