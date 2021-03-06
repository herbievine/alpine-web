import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { createWithApollo } from './apolloPackage'
// import { NextPageContext } from 'next'
import { withApollo } from 'next-apollo'
// import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    credentials: 'include',
    // headers: {
    //     cookie:
    //         (typeof window === 'undefined'
    //             ? ctx?.req?.headers.cookie
    //             : undefined) || ''
    // },
    cache: new InMemoryCache()
})

export default withApollo(createClient)
//         uri: 'http://localhost:8080/graphql',
//         credentials: 'include',
//         headers: {
//             cookie:
//                 (typeof window === 'undefined'
//                     ? ctx?.req?.headers.cookie
//                     : undefined) || ''
//         },
//         cache: new InMemoryCache()
//     })

// export const withApollo = createWithApollo(createClient)

// const client = new ApolloClient({
//     ssrMode: typeof window === "undefined",
//     link: new HttpLink({
//         uri: 'http://localhost:8080/graphql',
//         credentials: 'include'
//     }),
//     cache: new InMemoryCache(),
// })

// export default withApollo(client);
