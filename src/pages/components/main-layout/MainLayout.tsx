import { FC, ReactNode } from "react";
import "./MainLayout.css";
import { Sidebar } from "../../../design-system/Sidebar";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className="main-wrapper">
            <section className="sidebar-content">
                <Sidebar />
            </section>
            <section className="main-content">{children}</section>
        </main>
    );
};

export { MainLayout };
