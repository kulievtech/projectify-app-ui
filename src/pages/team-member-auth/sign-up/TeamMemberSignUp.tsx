import { useState } from "react";
import { Button, Input, Toaster } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import teamWork from "../../../assets/images/team-work.jpg";
import styled from "styled-components";
import { useFocus } from "../../../custom-hooks/useFocus";
import { teamMember } from "../../../api";
import { useSearchParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);

    .create-password__email,
    .create-password__submit-button {
        grid-column: 1 / 3;
    }
`;

const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const inviteToken = searchParams.get("inviteToken");

    const focusRef = useFocus();

    const isFormSubmittable = email && password && passwordConfirm;

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMember.signUp(
                {
                    email,
                    password,
                    passwordConfirm
                },
                inviteToken as string
            );

            setIsFormSubmitting(false);

            setEmail("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);

            setTimeout(() => {
                navigate("/team-member/login");
            }, 3000);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <>
            <AuthWrapper imageUrl={teamWork} pageTitle="Create Password">
                <Form onSubmit={createPassword}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                        className="create-password__email"
                        disabled={isFormSubmitting}
                        required={true}
                        inputRef={focusRef}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        shape="rounded"
                        size="lg"
                        disabled={isFormSubmitting}
                        required={true}
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={handleOnChangePasswordConfirm}
                        shape="rounded"
                        size="lg"
                        required={true}
                    />
                    <Button
                        color="primary"
                        size="lg"
                        shape="rounded"
                        className="create-password__submit-button"
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Create Password
                    </Button>
                </Form>

                <AuthActionLink
                    hintText="Already have a password?"
                    linkTo="../team-member/login"
                    linkText="Login"
                />
            </AuthWrapper>
            <Toaster />
        </>
    );
};

export { TeamMemberCreatePassword };
