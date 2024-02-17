import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Content = styled.div`
    max-width: 60rem;
    text-align: center;
`;

const Heading = styled.h1`
    color: #333;
    font-size: var(--space-24);
    margin-bottom: var(--space-30);
`;

const SupportSection = styled.section`
    margin-top: var(--space-30);
`;

const SupportTitle = styled.h2`
    color: #555;
    font-size: var(--space-40);
    margin-bottom: var(--space-20);
`;

const SupportContent = styled.p`
    color: #777;
    font-size: var(--space-18);
    line-height: 3rem;
    margin-bottom: 2rem;
`;

const SupportLink = styled.a`
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

function SupportPage() {
    return (
        <Container>
            <Content>
                <Heading>Need Help?</Heading>
                <SupportSection>
                    <SupportTitle>How can we assist you?</SupportTitle>
                    <SupportContent>
                        Our support team is here to help you with any questions
                        or concerns you may have regarding our products or
                        services.
                    </SupportContent>
                    <SupportContent>
                        If you require assistance, please contact us via email
                        at{" "}
                        <SupportLink href="mailto:support@example.com">
                            support@example.com{" "}
                        </SupportLink>
                        or call us at{" "}
                        <SupportLink href="tel:+1234567890">
                            +1 (234) 567-890
                        </SupportLink>
                        .
                    </SupportContent>
                    <SupportContent>
                        We strive to respond to all inquiries within 24 hours.
                        Your satisfaction is our top priority.
                    </SupportContent>
                </SupportSection>
            </Content>
        </Container>
    );
}

export { SupportPage };
