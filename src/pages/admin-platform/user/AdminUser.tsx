import { Button, Input, Typography } from "../../../design-system";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";
import { useState } from "react";
import { ConfirmationModal, ProfileWrapper } from "../../components";
import { useFocus, useStore } from "../../../hooks";
import { adminService, profileUpdateInput } from "../../../api";
import toast from "react-hot-toast";
import { Actions, UpdateUserAction } from "../../../store";

const AdminUser = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [showUpdateProfile, setShowUpdateProfile] = useState(false);
    const {
        state: { user },
        dispatch
    } = useStore();

    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [preferredFirstName, setPreferredFirstName] = useState(
        user?.preferredFirstName
    );

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

    const focusRef = useFocus();

    const updateProfile = () => {
        const updatedProfile: profileUpdateInput = {
            firstName: firstName,
            lastName: lastName,
            preferredFirstName: preferredFirstName,
            oldPassword: oldPassword,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        };
        setIsFormSubmitting(true);
        adminService
            .updateMe(updatedProfile)
            .then((_) => {
                setIsFormSubmitting(false);
                const action: UpdateUserAction = {
                    type: Actions.UPDATE_USER,
                    payload: {
                        firstName: firstName!,
                        lastName: lastName!,
                        preferredFirstName: preferredFirstName
                    }
                };
                dispatch(action);
                setShowUpdateProfile(false);
                toast.success("Profile has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(false);
                setShowUpdateProfile(false);
                toast.error(err.message);
            });
    };

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
                inputRef={focusRef}
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
                value={preferredFirstName!}
                onChange={(value: string) => {
                    setPreferredFirstName(value);
                }}
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
                password={newPasswordConfirm}
                handleOnChangePassword={(value: string) => {
                    setNewPasswordConfirm(value);
                }}
                isFormSubmitting={isFormSubmitting}
            />
            <Button
                shape="rounded"
                size="lg"
                color="primary"
                disabled={isFormSubmitting}
                onClick={() => {
                    setShowUpdateProfile(true);
                }}
            >
                Update
            </Button>
            <ConfirmationModal
                confirmationMessage="Are you sure you want to update your Profile"
                show={showUpdateProfile}
                confirmButtonColor="primary"
                cancel={() => {
                    setShowUpdateProfile(false);
                }}
                onConfirm={updateProfile}
            />
        </ProfileWrapper>
    );
};

export { AdminUser };
