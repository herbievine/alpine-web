import withApollo from '../utils/apolloWrapper'
import React, { useState } from 'react'
import DashboardNavigation from '../components/modules/DashboardNavigation'
import DashboardLeftNavigation from '../components/modules/DashboardLeftNavigation'
import Editor from '../components/modules/Editor'
import { DashboardContext } from '../components/contexts/DashboardContext'
import { isAuthenticated } from '../middleware/isAuthenticated'

const Dashboard: React.FC = ({}) => {
    isAuthenticated()
    const [selectedFolder, setSelectedFolder] = useState('')
    const [selectedFile, setSelectedFile] = useState('')

    return (
        <DashboardContext.Provider
            value={{
                selectedFolder,
                setSelectedFolder,
                selectedFile,
                setSelectedFile
            }}
        >
            <div className="bg-indigo-600 overflow-hidden">
                <DashboardNavigation />
                <div className="flex justify-between items-center">
                    <div className="xl:w-1/6">
                        <DashboardLeftNavigation />
                    </div>
                    <div className="xl:w-5/6">
                        <Editor selectedFolder={selectedFolder} />
                    </div>
                </div>
            </div>
        </DashboardContext.Provider>
    )
}

export default withApollo({ ssr: true })(Dashboard)
