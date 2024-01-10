import { useState } from "react";
import { PasswordWrapper } from "../../components";
import toast from "react-hot-toast";
import { Input, Button, Toaster } from "../../../design-system";
import forgotPassword from "../../../assets/illustrations/forgot-password.svg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { admin } from "../../../api";

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

    const getInstructions = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await admin.forgotPassword(email);
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
            <Toaster />
        </>
    );
};

export { AdminForgotPassword };
