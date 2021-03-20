import { ApolloClient, InMemoryCache } from '@apollo/client'
import { NextPageContext } from 'next'
import { withApollo } from 'next-apollo'

const createClient = (ctx: NextPageContext) => {
    return new ApolloClient({
        uri: process.env.API_URL,
        headers: {
            cookie:
                (typeof window === 'undefined'
                    ? ctx?.req?.headers.cookie
                    : undefined) || ''
        },
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
