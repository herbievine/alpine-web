import withApollo from '../utils/apolloWrapper'
import React from 'react'
import DashboardNavigation from '../components/modules/DashboardNavigation'
import DashboardLeftNavigation from '../components/modules/DashboardLeftNavigation'
import Editor from '../components/modules/Editor'

const Dashboard: React.FC = ({}) => {
    return (
        <div>
            <DashboardNavigation />
            <div className="flex justify-between items-center overflow-hidden">
                <div className="w-1/6">
                    <DashboardLeftNavigation />
                </div>
                <div className="w-5/6">
                    <Editor />
                </div>
            </div>
        </div>
    )
}

export default withApollo({ ssr: true })(Dashboard)
