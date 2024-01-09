import { useState } from "react";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import forgotPassword from "../../../assets/illustrations/forgot-password.svg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const focusRef = useFocus();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const getInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper pageTitle="Forgot Password?" imageUrl={forgotPassword}>
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
    );
};

export { AdminForgotPassword };
