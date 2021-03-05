import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/ThemeContext'
import React, { useState } from 'react'
// import { Provider, createClient, dedupExchange, fetchExchange } from 'urql'
// import { cacheExchange } from '@urql/exchange-graphcache'
import Navigation from '../modules/Navigation'
// import {
//     MeDocument,
//     LoginMutation,
//     RegisterMutation,
//     MeQuery,
//     LogoutMutation
// } from '../generated/graphql'
// import { updateQuery } from '../utils/urqlFunctionWrapper'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
        credentials: 'include'
    });

    // const client = createClient({
    //     url: 'http://localhost:8080/graphql',
    //     exchanges: [
    //         dedupExchange,
    //         fetchExchange,
    //         cacheExchange({
    //             updates: {
    //                 Mutation: {
    //                     login: (res, _, cache) => {
    //                         updateQuery<LoginMutation, MeQuery>(
    //                             cache,
    //                             { query: MeDocument },
    //                             res,
    //                             (result, query) => {
    //                                 if (result.login.errors) {
    //                                     return query
    //                                 } else {
    //                                     return {
    //                                         me: result.login.user
    //                                     }
    //                                 }
    //                             }
    //                         )
    //                     },
    //                     register: (res, _, cache) => {
    //                         updateQuery<RegisterMutation, MeQuery>(
    //                             cache,
    //                             { query: MeDocument },
    //                             res,
    //                             (result, query) => {
    //                                 if (result.register.errors) {
    //                                     return query
    //                                 } else {
    //                                     return {
    //                                         me: result.register.user
    //                                     }
    //                                 }
    //                             }
    //                         )
    //                     },
    //                     logout: (res, _, cache) => {
    //                         updateQuery<LogoutMutation, MeQuery>(
    //                             cache,
    //                             { query: MeDocument },
    //                             res,
    //                             () => ({ me: null })
    //                         )
    //                     },
    //                 }
    //             }
    //         })
    //     ],
    //     fetchOptions: {
    //         credentials: 'include'
    //     }
    // })

    return (
        <>
            <Head>
                <title>Alpine</title>
            </Head>
            {/*<Provider value={client}>*/}
            <ApolloProvider client={client}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className={theme}>
                        <Navigation />
                        <Component {...pageProps} />
                    </div>
                </ThemeContext.Provider>
            </ApolloProvider>
            {/*</Provider>*/}
        </>
    )
}

export default MyApp
