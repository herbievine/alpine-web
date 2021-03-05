import React from 'react'
import withApollo from '../utils/apolloWrapper'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
}

export default withApollo({ ssr: true })(Index)
