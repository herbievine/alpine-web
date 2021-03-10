import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/contexts/ThemeContext'
import React, { useEffect, useState } from 'react'
import Navigation from '../components/modules/Navigation'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
    const { route } = useRouter()
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [displayNav, setDisplayNav] = useState<boolean>(true)

    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        credentials: 'include',
        cache: new InMemoryCache()
    })

    useEffect(() => {
        setDisplayNav((value) => (route === '/dashboard' ? !value : value))
    }, [route])

    return (
        <>
            <Head>
                <title>loop</title>
            </Head>
            <ApolloProvider client={client}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className={theme}>
                        {displayNav && <Navigation />}
                        <Component {...pageProps} />
                    </div>
                </ThemeContext.Provider>
            </ApolloProvider>
        </>
    )
}

export default MyApp
