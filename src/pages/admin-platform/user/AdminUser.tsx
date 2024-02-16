import styled from "styled-components";
import { Button, Input, Typography } from "../../../design-system";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";
import { useState } from "react";
import { ProfileWrapper } from "../../components";
import { useStore } from "../../../hooks";

const AdminUser = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const {
        state: { user },
        dispatch
    } = useStore();

    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    // const [preferredFirstName, setPreferredFirstName] = useState(
    //     user?.preferredFirstName
    // ); => send preferred first name from backend as well

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    return (
        <ProfileWrapper>
            <Typography variant="h6" weight="medium" align="left">
                Profile
            </Typography>
            {/* <Image/> Maybe will add image later */}
            <Input
                labelText="First Name"
                shape="rounded"
                value={firstName!}
                size="lg"
                onChange={(value: string) => {
                    setFirstName(value);
                }}
                disabled={isFormSubmitting}
            />
            <Input
                labelText="Last Name"
                shape="rounded"
                size="lg"
                value={lastName!}
                onChange={(value: string) => {
                    setLastName(value);
                }}
                disabled={isFormSubmitting}
            />
            <Input
                labelText="Preferred First Name"
                shape="rounded"
                size="lg"
                value=""
                onChange={() => {}}
                disabled={isFormSubmitting}
            />
            <PasswordInputWithEye
                placeholder="Old Password"
                password={oldPassword}
                handleOnChangePassword={(value: string) => {
                    setOldPassword(value);
                }}
                isFormSubmitting={isFormSubmitting}
            />
            <PasswordInputWithEye
                placeholder="New Password"
                password={newPassword}
                handleOnChangePassword={(value: string) => {
                    setNewPassword(value);
                }}
                isFormSubmitting={isFormSubmitting}
            />
            <PasswordInputWithEye
                placeholder="Confirm New Password"
                password={confirmNewPassword}
                handleOnChangePassword={(value: string) => {
                    setConfirmNewPassword(value);
                }}
                isFormSubmitting={isFormSubmitting}
            />
            <Button
                shape="rounded"
                size="lg"
                color="primary"
                disabled={isFormSubmitting}
            >
                Update
            </Button>
        </ProfileWrapper>
    );
};

export { AdminUser };
