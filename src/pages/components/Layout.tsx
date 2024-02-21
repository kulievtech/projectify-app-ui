import styled from "styled-components";

const AppLayout = styled.main`
    display: flex;
`;

const AppPage = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: var(--jaguar-12);
    padding: var(--space-30);
`;

export const Scrollable = styled.div`
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.4rem;
        border-radius: var(--border-radius-8);
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: var(--border-radius-8);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--jaguar-100);
        border-radius: var(--border-radius-8);
    }
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

export { AppLayout, AppPage, ProfileWrapper };
