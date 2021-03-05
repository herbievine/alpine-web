import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/ThemeContext'
import React, { useState } from 'react'
import { Provider, createClient } from 'urql'
import Navigation from '../modules/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const client = createClient({
        url: 'http://localhost:8080/graphql',
        fetchOptions: {
            credentials: 'include'
        }
    })

    return (
        <>
            <Head>
                <title>Alpine</title>
            </Head>
            <Provider value={client}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <div className={theme}>
                        <Navigation />
                        <Component {...pageProps} />
                    </div>
                </ThemeContext.Provider>
            </Provider>
        </>
    )
}

export default MyApp
