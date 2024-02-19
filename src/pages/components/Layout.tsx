import styled from "styled-components";

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
    margin: 0 auto;
`;

const ProfileWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    max-width: 57rem;
    margin: auto;
    gap: var(--space-30);
`;

export { AppLayout, AppContent, Page, PageContent, ProfileWrapper };
