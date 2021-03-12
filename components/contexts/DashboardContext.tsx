import { createContext, Dispatch, SetStateAction } from 'react'

export interface Dashboard {
    selectedFolder: string
    setSelectedFolder: Dispatch<SetStateAction<string>>
    selectedFile: string
    setSelectedFile: Dispatch<SetStateAction<string>>
}

export const DashboardContext = createContext<Dashboard | null>(null)
