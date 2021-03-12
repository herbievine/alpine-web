import { useMeQuery } from '../generated/graphql'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const isAuthenticated = () => {
    const { data, loading } = useMeQuery()
    const router = useRouter()

    console.log('auth middleware')

    useEffect(() => {
        if (!loading && !data?.me) {
            router.replace('/login?next=' + router.route)
        } else if (!loading && data?.me) {
            router.replace((router.query.next as string) ?? '/dashboard')
        }
    }, [data])
}

export { isAuthenticated }
