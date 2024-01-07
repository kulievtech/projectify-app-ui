import { useState } from "react";
import { PasswordWrapper } from "../../components";
import { Input, Button } from "../../../design-system";
import updatePassword from "../../../assets/illustrations/reset-password.svg";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const AdminResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [searchParams] = useSearchParams();
    const resetPasswordToken = searchParams.get("resetPasswordToken");

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPassword, passwordConfirm);
    };

    return (
        <PasswordWrapper pageTitle="Update Password?" imageUrl={updatePassword}>
            <Form onSubmit={resetPassword}>
                <Input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    fullWidth={true}
                >
                    Reset My Password
                </Button>
            </Form>
        </PasswordWrapper>
    );
};

export { AdminResetPassword };
