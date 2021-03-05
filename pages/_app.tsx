import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext } from '../components/ThemeContext'
import React, { useState } from 'react'
import Navigation from '../modules/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
        <>
            <Head>
                <title>Alpine</title>
            </Head>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={theme}>
                    <Navigation />
                    <Component {...pageProps} />
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default MyApp
