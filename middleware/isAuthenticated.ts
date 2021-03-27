import { useMeQuery } from '../generated/graphql'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const isAuthenticated = () => {
    const { data, loading } = useMeQuery()
    const router = useRouter()

    useEffect(() => {
        if (
            !loading &&
            !data?.me &&
            router.route !== '/register' &&
            router.route !== '/login'
        ) {
            router.replace('/login?next=' + router.route)
        } else if (!loading && data?.me) {
            router.replace((router.query.next as string) ?? '/dashboard')
        }
    }, [data])
}

export { isAuthenticated }
