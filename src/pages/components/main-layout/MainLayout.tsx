import { FC, ReactNode } from "react";
import { Sidebar } from "../../../design-system/Sidebar";
import styled from "styled-components";

type MainLayoutProps = {
    children: ReactNode;
};

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 100vh;
`;

const SidebarContent = styled.section`
    background-color: var(--white);
`;

const MainContent = styled.section`
    background-color: var(--jaguar-12);
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <SidebarContent>
                <Sidebar />
            </SidebarContent>
            <MainContent>{children}</MainContent>
        </Wrapper>
    );
};

export { MainLayout };
