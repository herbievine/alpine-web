import React from 'react'

interface EditorProps {}

const Editor: React.FC<EditorProps> = ({}) => {
    return (
        <div className="flex flex-col items-start justify-start w-5/6 h-full z-10 absolute top-14 bg-gray-100">
            <div className="w-full mt-20 flex justify-between items-center">
                <p>item 1</p>
                <p>item 3</p>
            </div>
            <p>item 2</p>
        </div>
    )
}

export default Editor
