import {Navigate} from 'react-router-dom';
import { ReactNode} from "react";



export const PrivateRoute = ({ children}:{children: ReactNode}) => {
    const isAuthenticated = true;

    if (isAuthenticated) {
        return children
    }

    return <Navigate to="/login" />
}