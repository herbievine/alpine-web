import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextPageContext } from 'next'
import { withApollo } from 'next-apollo'

const createClient = (ctx: NextPageContext) => {
    return new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            cookie:
                (typeof window === 'undefined'
                    ? ctx?.req?.headers.cookie
                    : undefined) || ''
        },
        ssrMode: typeof window === 'undefined',
        credentials: 'include',
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        folders: {
                            keyArgs: []
                        }
                    }
                }
            }
        })
    })
}

// @ts-ignore
export default withApollo(createClient)
