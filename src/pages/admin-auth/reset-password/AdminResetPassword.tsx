import { useEffect, useState } from "react";
import { PasswordWrapper } from "../../components";
import { Button } from "../../../design-system";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFocus } from "../../../hooks/useFocus";
import { admin } from "../../../api";
import toast from "react-hot-toast";
import updatePassword from "../../../assets/illustrations/reset-password.svg";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
    const [searchParams] = useSearchParams();
    const passwordResetToken = searchParams.get("passwordResetToken");
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!passwordResetToken) navigate("/admin/forgot-password");
    }, [passwordResetToken, navigate]);

    const focusRef = useFocus();

    const isFormSubmittable = newPassword && newPasswordConfirm;

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangeNewPasswordConfirm = (value: string) => {
        setNewPasswordConfirm(value);
    };

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await admin.resetPassword(
                newPassword,
                newPasswordConfirm,
                passwordResetToken as string
            );

            setIsFormSubmitting(false);
            setNewPassword("");
            setNewPasswordConfirm("");

            toast.success(response.message);
            setTimeout(() => {
                navigate("/admin/login");
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
                <PasswordInputWithEye
                    placeholder="New Password"
                    password={newPassword}
                    handleOnChangePassword={handleOnChangeNewPassword}
                    isFormSubmitting={isFormSubmitting}
                    focusRef={focusRef}
                />
                <PasswordInputWithEye
                    placeholder="Confirm Password"
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

export { AdminResetPassword };
