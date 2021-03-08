import { useRouter } from 'next/router'
import React from 'react'
import withApollo from '../../utils/apolloWrapper'

interface FilesProps {}

const Files: React.FC<FilesProps> = ({}) => {
    const router = useRouter()
    const { id } = router.query

    return <div>File ID is {id}</div>
}

export default withApollo({ ssr: true })(Files)
