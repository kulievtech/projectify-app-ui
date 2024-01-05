import { FC, ReactNode } from "react";
import { Button, Typography } from "../../../design-system";
import styled from "styled-components";

type DefaultPageWrapperProps = {
    imagePath: string;
    pageTitle: string;
    btnText: string;
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        margin-bottom: 2.5rem;
        height: 24rem;
        width: auto;
    }

    .page-title {
        margin-bottom: 5rem;
    }

    .btn {
        width: 90%;
        max-width: 27rem;
        border-radius: var(--space-16);
    }
`;

const DefaultPageWrapper: FC<DefaultPageWrapperProps> = ({
    imagePath,
    pageTitle,
    btnText
}) => {
    return (
        <Wrapper>
            <Content>
                <img src={imagePath} alt={pageTitle} />
                <Typography variant="paragraphLG" className="page-title">
                    {pageTitle}
                </Typography>
                <Button
                    shape="rounded"
                    color="primary"
                    size="lg"
                    className="btn"
                >
                    {btnText}
                </Button>
            </Content>
        </Wrapper>
    );
};

export { DefaultPageWrapper };
