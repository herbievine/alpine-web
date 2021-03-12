import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState
} from 'react'

export interface Dashboard {
    selectedFolder: string
    setSelectedFolder: Dispatch<SetStateAction<string>>
    selectedFile: string
    setSelectedFile: Dispatch<SetStateAction<string>>
}

const DashboardContext = createContext<Dashboard | null>(null)

export const useDashboardContext = () =>
    useContext<Dashboard | null>(DashboardContext)

export const DashboardProvider: React.FC<{}> = ({ children }) => {
    const [selectedFolder, setSelectedFolder] = useState('')
    const [selectedFile, setSelectedFile] = useState('')

    return (
        <DashboardContext.Provider
            value={{
                selectedFolder,
                setSelectedFolder,
                selectedFile,
                setSelectedFile
            }}
        >
            {children}
        </DashboardContext.Provider>
    )
}
