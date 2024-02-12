import styled from "styled-components";
import { Typography } from "../../design-system";

const AppLayout = styled.main`
    display: grid;
    grid-template-columns: 30.4rem 1fr;
`;

const AppContent = styled.section`
    background-color: var(--jaguar-12);
    height: 100vh;
    padding: var(--space-30);
`;

const Page = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
`;

const PageContent = styled.section`
    width: 80%;
    margin: 0 auto;
`;

export const PageHeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
`;
export const PageTitle = styled(Typography)`
    margin-bottom: var(--space-36);
`;

export { AppLayout, AppContent, Page, PageContent };
