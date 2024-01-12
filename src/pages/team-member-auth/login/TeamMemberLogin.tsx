import { useState } from "react";
import { Button, Input, Label } from "../../../design-system";
import { AuthWrapper } from "../../components";
import office from "../../../assets/images/office.jpg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { teamMember } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { useLocalStorage } from "../../../custom-hooks/useLocalStorage";

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

const TeamMemberLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
    const isFormSubmittable = email && password;
    const { setItem } = useLocalStorage();
    const focusRef = useFocus();

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMember.signIn({
                email,
                password
            });

            setItem("authToken", response.token);

            setIsFormSubmitting(false);

            setEmail("");
            setPassword("");

            setTimeout(() => {
                navigate("../team-member/platform");
            }, 1000);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={office} pageTitle="Login" switchLayout>
            <Form onSubmit={login} noValidate>
                <Input
                    labelText="Email"
                    type="email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                    required={true}
                    inputRef={focusRef}
                />
                <PasswordLabelWrapper>
                    <Label className="password-label">Password</Label>
                    <Link
                        to={"../team-member/forgot-password"}
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
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Login
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };
