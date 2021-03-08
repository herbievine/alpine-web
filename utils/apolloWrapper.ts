import { ApolloClient, InMemoryCache } from '@apollo/client'
import { withApollo } from 'next-apollo'

const createClient = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    credentials: 'include',
    cache: new InMemoryCache()
})

export default withApollo(createClient)
