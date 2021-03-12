import withApollo from '../utils/apolloWrapper'
import React from 'react'
import DashboardNavigation from '../components/modules/DashboardNavigation'
import DashboardLeftNavigation from '../components/modules/DashboardLeftNavigation'
import MarkdownEditor from '../components/modules/Editor'
import { DashboardProvider } from '../components/contexts/DashboardContext'
import { isAuthenticated } from '../middleware/isAuthenticated'

const Dashboard: React.FC = ({}) => {
    isAuthenticated()

    return (
        <DashboardProvider>
            <div className="bg-indigo-600 overflow-hidden">
                <DashboardNavigation />
                <div className="flex justify-between items-center">
                    <div className="xl:w-1/6">
                        <DashboardLeftNavigation />
                    </div>
                    <div className="xl:w-5/6">
                        <MarkdownEditor />
                    </div>
                </div>
            </div>
        </DashboardProvider>
    )
}

export default withApollo({ ssr: true })(Dashboard)
