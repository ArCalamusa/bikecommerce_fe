import { Outlet, useNavigate } from "react-router-dom";

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