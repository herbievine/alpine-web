import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/ThemeContext'
import React, { useState } from 'react'
import Navigation from '../modules/Navigation'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        cache: new InMemoryCache(),
        credentials: 'include'
    });

    return (
        <>
            <Head>
                <title>Alpine</title>
            </Head>
            <ApolloProvider client={client}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className={theme}>
                        <Navigation />
                        <Component {...pageProps} />
                    </div>
                </ThemeContext.Provider>
            </ApolloProvider>
        </>
    )
}

export default MyApp
