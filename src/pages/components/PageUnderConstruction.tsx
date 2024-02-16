import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Text = styled.h1`
    font-family: "Arial", sans-serif;
    font-size: 50px;
    color: #333;
`;

const Dots = styled.span`
    font-size: 100px;
    color: #333;
    animation: ${blink} 1s infinite;
`;

const PageUnderConstruction = () => {
    return (
        <Container>
            <Text>The Page is Under Construction</Text>
            <Dots>...</Dots>
        </Container>
    );
};

export { PageUnderConstruction };
