import React from 'react'

interface DashboardNavigationProps {}

const DashboardNavigation: React.FC<DashboardNavigationProps> = ({}) => {
    return (
        <div className="h-24 bg-indigo-600">
            <div className="w-full flex justify-between items-center">
                <div>one</div>
                <div>two</div>
            </div>
        </div>
    )
}

export default DashboardNavigation
