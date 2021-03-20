import withApollo from '../utils/apolloWrapper'
import React from 'react'
import WithNavigation from '../components/modules/Navigation'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
    return (
        <WithNavigation>
            <div>
                <h2>Home Page</h2>
            </div>
        </WithNavigation>
    )
}

export default withApollo({ ssr: true })(Index)
