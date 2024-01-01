import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";

import updatePasswordImg from "../../../assets/images/update-password.svg";

const UpdatePassword = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");

    const handleOnChangeNewPassword = (value: string) => {
        setNewPassword(value);
    };

    const handleOnChangeNewPasswordConfirm = (value: string) => {
        setNewPasswordConfirm(value);
    };

    const resetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newPassword, newPasswordConfirm);
    };

    return (
        <PasswordWrapper
            pageTitle="Update Password"
            imagePath={updatePasswordImg}
            btnText="Reset My Password"
        >
            <form onSubmit={resetPassword}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={newPassword}
                    onChange={handleOnChangeNewPassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={newPasswordConfirm}
                    onChange={handleOnChangeNewPasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
            </form>
        </PasswordWrapper>
    );
};

export { UpdatePassword };
