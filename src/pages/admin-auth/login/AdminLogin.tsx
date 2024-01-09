import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import styled from "styled-components";
import flatIronBuilding from "../../../assets/images/flat-iron-building.jpg";
import { useFocus } from "../../../custom-hooks/useFocus";
import { admin } from "../../../api";
import { useNavigate } from "react-router-dom";

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

            const { token } = await admin.signIn({
                email,
                password
            });

            localStorage.setItem("authToken", token);

            navigate("../admin/platform");

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
        }
    };

    return (
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
        </AuthWrapper>
    );
};

export { AdminLogin };
