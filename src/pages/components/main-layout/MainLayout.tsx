import { FC, ReactNode } from "react";
import "./MainLayout.css";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className="main-wrapper">
            <div className="sidebar"></div>
            <div className="main-content">{children}</div>
        </main>
    );
};

export { MainLayout };
