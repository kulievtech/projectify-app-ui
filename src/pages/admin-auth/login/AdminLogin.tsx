import { useState } from "react";
import { Button, Input, Label } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import styled from "styled-components";
import { useFocus } from "../../../hooks/useFocus";
import { Link, useNavigate } from "react-router-dom";
import { admin } from "../../../api";
import toast from "react-hot-toast";
import flatIronBuilding from "../../../assets/images/flat-iron-building.jpg";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-30);
`;

const PasswordLabelWrapper = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr;
    align-items: center;

    .password-label {
        grid-column: 1 / 2;
    }

    .forgot-password-link {
        grid-column: 2 / 3;
        font-size: var(--font-size-16);
        line-height: var(--line-height-24);
        color: var(--primary-500);
        font-weight: var(--font-weight-500);
        text-align: right;
        margin-bottom: var(--space-6);
    }

    .login__input-password {
        grid-column: 1 / 3;
    }
`;

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const { setItem } = useLocalStorage();
    const navigate = useNavigate();

    const focusRef = useFocus();

    const isFormSubmittable = email && password;

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const saveAuthToken = (token: string) => {
        setItem("authToken", token);
    };

    const authorizeLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const { token } = await admin.signIn({
                email,
                password
            });

            saveAuthToken(token);

            setIsFormSubmitting(false);
            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("../admin/platform");
            }, 1000);
        } catch (error) {
            setIsFormSubmitting(false);
            setIsError(true);
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Login" switchLayout>
            <Form onSubmit={authorizeLogin}>
                <Input
                    labelText="Email"
                    type="email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="login__email"
                    required={true}
                    inputRef={focusRef}
                    disabled={isFormSubmitting}
                />
                <PasswordLabelWrapper>
                    <Label className="password-label">Password</Label>
                    <Link
                        to={"../admin/forgot-password"}
                        className="forgot-password-link"
                    >
                        Forgot password?
                    </Link>
                    <Input
                        type="password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        required={true}
                        className="login__input-password"
                        disabled={isFormSubmitting}
                    />
                </PasswordLabelWrapper>

                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="login__submit-button"
                    disabled={isFormSubmitting || !isFormSubmittable}
                    fullWidth={true}
                >
                    Login
                </Button>
            </Form>

            <AuthActionLink
                hintText="Don’t have an account?"
                linkTo="/admin/sign-up"
                linkText="Sign Up"
            />
        </AuthWrapper>
    );
};

export { AdminLogin };
