import { useState } from "react";
import { Button, Input, Toaster } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { useNavigate } from "react-router-dom";
import { admin } from "../../../api";
import toast from "react-hot-toast";
import flatIronBuilding from "../../../assets/images/flat-iron-building.jpg";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);

    .login__email,
    .login__password,
    .login__submit-button {
        grid-column: 1 / 3;
    }
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
`;

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const navigate = useNavigate();

    const focusRef = useFocus();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const authorizeLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await admin.signIn({
                email,
                password
            });

            localStorage.setItem("authToken", response.token);

            navigate("../admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
            toast.success(response.message);
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Login">
                <Form onSubmit={authorizeLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        className="login__email"
                        required={true}
                        inputRef={focusRef}
                        disabled={isFormSubmitting}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        required={true}
                        className="login__password"
                        disabled={isFormSubmitting}
                    />
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        className="login__submit-button"
                    >
                        Login
                    </Button>
                </Form>
                <ActionLinks>
                    <AuthActionLink
                        hintText="Don’t have an account?"
                        linkTo="../admin/sign-up"
                        linkText="Sign Up"
                    />
                    <AuthActionLink
                        hintText="Forgot password? "
                        linkTo="../admin/forget-password"
                        linkText="Get Help"
                    />
                </ActionLinks>
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { AdminLogin };
