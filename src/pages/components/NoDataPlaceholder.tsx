import React from "react";
import styled from "styled-components";
import { Button, Typography } from "../../design-system";

type NoDatePlaceholderProps = {
    illustrationUrl: string;
    text: string;
    buttonText?: string;
    buttonAction?: () => void;
};

const NoDataPlaceholderBase = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Illustration = styled.img`
    display: block;
    margin: 0 auto var(--space-24) auto;

    alt: "There is no data";
`;

const Text = styled(Typography)`
    margin-bottom: var(--space-50);
    text-align: center;
`;

const NoDataPlaceholder: React.FC<NoDatePlaceholderProps> = ({
    illustrationUrl,
    text,
    buttonText,
    buttonAction
}) => {
    return (
        <NoDataPlaceholderBase>
            <Illustration src={illustrationUrl} />
            <Text variant="paragraphLG" weight="medium">
                {text}
            </Text>
            {buttonText ? (
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                    onClick={buttonAction}
                >
                    {buttonText}
                </Button>
            ) : null}
        </NoDataPlaceholderBase>
    );
};

export { NoDataPlaceholder };
