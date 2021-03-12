import withApollo from '../utils/apolloWrapper'
import React, { useContext } from 'react'
import { ThemeContext } from '../components/contexts/ThemeContext'
import WithNavigation from '../components/modules/Navigation'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
    const setTheme = useContext(ThemeContext)?.setTheme

    return (
        <WithNavigation>
            <div>
                <h2>Home Page</h2>
                {setTheme && (
                    <button
                        onClick={() =>
                            setTheme((theme) =>
                                theme === 'light' ? 'dark' : 'light'
                            )
                        }
                        className="bg-red-500 dark:bg-blue-500"
                    >
                        change to dark
                    </button>
                )}
            </div>
        </WithNavigation>
    )
}

export default withApollo({ ssr: true })(Index)
