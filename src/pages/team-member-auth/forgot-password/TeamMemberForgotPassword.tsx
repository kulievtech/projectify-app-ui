import { useState } from "react";
import { PasswordWrapper } from "../../components";
import toast from "react-hot-toast";
import { Input, Button, Icon, Typography } from "../../../design-system";
import forgotPassword from "../../../assets/illustrations/forgot-password.svg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { Link } from "react-router-dom";
import { teamMember } from "../../../api";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const StyledBackArrowLink = styled(Link)`
    width: max-content;
    display: flex;
    gap: var(--space-20);
    margin: var(--space-50) 0 0 var(--space-50);
    cursor: pointer;
    position: absolute;

    .arrow__left-icon {
        fill: var(--primary-500);

        /* stroke: var(--primary-500);
        stroke-width: 0.2rem;
        stroke-linecap: round; */
    }

    .back-text {
        color: var(--jaguar-900);
    }
`;

const TeamMemberForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const focusRef = useFocus();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await teamMember.forgotPassword(email);
            setEmail("");
            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <StyledBackArrowLink to={"../team-member/login"}>
                <Icon iconName="arrow-left" className="arrow__left-icon" />
                <Typography
                    variant="paragraphSM"
                    weight="medium"
                    className="back-text"
                >
                    Back
                </Typography>
            </StyledBackArrowLink>
            <PasswordWrapper
                pageTitle="Forgot Password?"
                imageUrl={forgotPassword}
            >
                <Form onSubmit={getInstructions}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        required={true}
                        inputRef={focusRef}
                    />
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        fullWidth={true}
                    >
                        Get Instructions
                    </Button>
                </Form>
            </PasswordWrapper>
        </>
    );
};

export { TeamMemberForgotPassword };
