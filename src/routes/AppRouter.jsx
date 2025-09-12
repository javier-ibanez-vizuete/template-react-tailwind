import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { useRole } from "../hooks/useRole";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
    const { hasRole } = useRole();

    if (hasRole("admin")) return <Routes></Routes>;

    return (
        <Routes>
            <Route
                path="/"
                element={hasRole("admin") ? <Navigate to={"/dashboard"} replace /> : <HomePage />}
            />
            <Route path="/home" element={<HomePage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/user" element={<h1>RUTA PRIVADA</h1>} />
            </Route>

            <Route path="*" element={<h1>RUTA NO ENCONTRADA</h1>} />
        </Routes>
    );
};
