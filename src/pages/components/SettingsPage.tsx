import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    max-width: 80rem;
    margin: var(--space-50) auto;
    padding: var(--space-20);
    background-color: #f9f9f9;
    border-radius: var(--space-10);
    box-shadow: 0 var(--space-4) var(--space-8) rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
    font-size: var(--space-18);
    color: #333;
    text-align: center;
`;

const Section = styled.section`
    margin-top: var(--space-40);
`;

const SectionTitle = styled.h2`
    color: #555;
    font-size: var(--space-24);
    margin-bottom: var(--space-20);
`;

const SectionContent = styled.p`
    color: #777;
    font-size: var(--space-18);
    line-height: var(--space-30);
    margin-bottom: var(--space-20);
`;

const StyledLink = styled(Link)`
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

function SettingsPage() {
    return (
        <Container>
            <Heading>Settings</Heading>
            <Section>
                <SectionTitle>Profile Settings</SectionTitle>
                <SectionContent>
                    Manage your profile details, such as your name, email, and
                    profile picture.
                </SectionContent>
                <SectionContent>
                    <StyledLink to="/admin/platform/me">
                        Go to Profile Settings
                    </StyledLink>
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>Account Settings</SectionTitle>
                <SectionContent>
                    Update your account preferences, change your password, or
                    manage connected accounts.
                </SectionContent>
                <SectionContent>
                    <StyledLink to="/admin/platform/me">
                        Go to Account Settings
                    </StyledLink>
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>Notification Settings</SectionTitle>
                <SectionContent>
                    Customize your notification preferences to stay updated with
                    important information.
                </SectionContent>
                <SectionContent>
                    <StyledLink to="/admin/platform/me">
                        Go to Notification Settings
                    </StyledLink>
                </SectionContent>
            </Section>
        </Container>
    );
}

export { SettingsPage };
