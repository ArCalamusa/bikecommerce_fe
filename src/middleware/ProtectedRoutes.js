import { Outlet, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

const useAuth = () => {
    const session = JSON.parse(localStorage.getItem("loggedIn"));
    return session
}

const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const isAuthorized = useAuth();
    return isAuthorized ? <Outlet /> : navigate('/', { replace: true })
}

export default ProtectedRoutes;

/* outlet renderizza tutti i componenti usati come figli della route se isAutorized è true */