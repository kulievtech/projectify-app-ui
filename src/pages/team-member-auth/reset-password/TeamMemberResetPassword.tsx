import { useEffect, useState } from "react";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFocus } from "../../../hooks/useFocus";
import { teamMember } from "../../../api";
import toast from "react-hot-toast";
import updatePassword from "../../../assets/illustrations/reset-password.svg";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const isFormSubmittable = newPassword && newPasswordConfirm;
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");

    const navigate = useNavigate();

    useEffect(() => {
        if (!passwordResetToken) navigate("/team-member/forgot-password");
    }, [passwordResetToken, navigate]);

    const focusRef = useFocus();

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangeNewPasswordConfirm = (value: string) => {
        setNewPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await teamMember.resetPassword(
                newPassword,
                newPasswordConfirm,
                passwordResetToken as string
            );

            setIsFormSubmitting(false);

            setNewPassword("");
            setNewPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/team-member/login");
            }, 4000);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <PasswordWrapper pageTitle="Reset Password?" imageUrl={updatePassword}>
            <Form onSubmit={resetPassword}>
                {/* <Input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
                    shape="rounded"
                    size="lg"
                    required={true}
                    inputRef={focusRef}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={newPasswordConfirm}
                    onChange={handleOnChangeNewPasswordConfirm}
                    shape="rounded"
                    size="lg"
                    required={true}
                /> */}
                <PasswordInputWithEye
                    placeholder="Password"
                    password={newPassword}
                    handleOnChangePassword={handleOnChangeNewPassword}
                    focusRef={focusRef}
                    isFormSubmitting={isFormSubmitting}
                />
                <PasswordInputWithEye
                    placeholder="Password Confirm"
                    password={newPasswordConfirm}
                    handleOnChangePassword={handleOnChangeNewPasswordConfirm}
                    isFormSubmitting={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Reset My Password
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { TeamMemberResetPassword };
