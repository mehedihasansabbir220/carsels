import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";


export default function RequireAuth(){
    let auth = useAuth();
    let location = useLocation();
    if (!auth.user.email){
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return <Outlet />;
}