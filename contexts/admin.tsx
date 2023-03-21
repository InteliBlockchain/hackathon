import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

interface AdminContextInterface {
    token: string | null
    setToken: Dispatch<SetStateAction<null>>
}

const AdminContext = createContext<AdminContextInterface | null>(null)

export default function AdminProvider({ children }: any) {
    const [token, setToken] = useState(null)

    return (
        <AdminContext.Provider
            value={{
                token,
                setToken,
            }}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdmin() {
    const context = useContext(AdminContext)
    if (!context) throw new Error('useAdmin must be used within a AdminProvider')
    const { token, setToken } = context
    return { token, setToken }
}
