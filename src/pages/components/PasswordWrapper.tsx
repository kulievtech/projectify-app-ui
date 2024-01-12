import { FC, ReactNode } from "react";
import { Typography } from "../../design-system";
import styled from "styled-components";
import { Toaster } from "../../design-system/Toast";

type PasswordWrapperProps = {
    pageTitle: string;
    imageUrl: string;
    children: ReactNode;
};

const Wrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const PasswordForm = styled.section`
    padding: var(--space-50);
`;

const PasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PasswordImageWrapper = styled.div`
    padding: var(--space-50);
`;

const PasswordImage = styled.img`
    height: 24rem;
    width: auto;
    alt: "Projectify App | Update Password";
`;

const PasswordWrapper: FC<PasswordWrapperProps> = ({
    imageUrl,
    pageTitle,
    children
}) => {
    return (
        <>
            <Wrapper>
                <PasswordForm>
                    <PasswordContent>
                        <Typography variant="h6">{pageTitle}</Typography>
                        <PasswordImageWrapper>
                            <PasswordImage src={imageUrl} />
                        </PasswordImageWrapper>
                        {children}
                    </PasswordContent>
                </PasswordForm>
            </Wrapper>
            <Toaster />
        </>
    );
};

export { PasswordWrapper };
