import { Sidebar } from "../components/SideBar";

export const AdminLayout = ({ children }) => {
    return (
        <div>
            <header>BARRA DE NAVEGACION ADMIN</header>
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};
