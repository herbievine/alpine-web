import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextPageContext } from 'next'
import { withApollo } from 'next-apollo'

const createClient = (ctx: NextPageContext) => {
    return new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        headers: {
            cookie:
                (typeof window === 'undefined'
                    ? ctx?.req?.headers.cookie
                    : undefined) || ''
        },
        credentials: 'include',
        cache: new InMemoryCache()
    })
}

// @ts-ignore
export default withApollo(createClient)
