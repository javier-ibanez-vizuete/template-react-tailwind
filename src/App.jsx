import { useRole } from "./hooks/useRole";
import { AdminLayout } from "./layouts/AdminLayout";
import { MainLayout } from "./layouts/MainLayout";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
    const { hasRole } = useRole();

    if (hasRole("admin"))
        return (
            <AdminLayout>
                <AppRouter />
            </AdminLayout>
        );
    return (
        <MainLayout>
            <AppRouter />
        </MainLayout>
    );
};
