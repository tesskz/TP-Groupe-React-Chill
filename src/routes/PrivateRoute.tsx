import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

interface PrivateRouteProps {
    children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const loggedUser = useSelector((state: RootState) => state.auth.loggedUser)

    if (isLoading) {
        return <p>Chargement...</p>
    }

    return loggedUser ? <>{children}</> : <Navigate to="/login" replace />
}

export default PrivateRoute
