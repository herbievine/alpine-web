import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextPageContext } from 'next'
import { createWithApollo } from './createApolloProvider'

const createClient = (ctx: NextPageContext) => {
    return new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_URL,
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

export const withApollo = createWithApollo(createClient)
