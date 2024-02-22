import { Button, Typography } from "../../../design-system";
import { PasswordInputWithEye } from "../../components/PasswordInputWithEye";
import { useState } from "react";
import { ConfirmationModal, ProfileWrapper } from "../../components";
import { useFocus, useLocalStorage, useStore } from "../../../hooks";
import { TeamMemberProfileUpdateInput, teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Actions } from "../../../store";

const TeamMemberUser = () => {
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [showUpdatePassword, setShowUpdatePassword] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

    const focusRef = useFocus();

    const { dispatch } = useStore();
    const { removeItem } = useLocalStorage();
    const navigate = useNavigate();

    const updatePassword = () => {
        const updatedProfile: TeamMemberProfileUpdateInput = {
            oldPassword: oldPassword,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        };
        setIsFormSubmitting(true);
        teamMemberService
            .updateMe(updatedProfile)
            .then((_) => {
                setIsFormSubmitting(false);
                setShowUpdatePassword(false);
                toast.success(
                    "Password has been successfully updated, you will be logged out!"
                );

                setTimeout(() => {
                    removeItem("authToken");
                    removeItem("userRole");
                    dispatch({ type: Actions.RESET_STATE });
                    navigate("/team-member/login");
                }, 5000);
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(false);
                setShowUpdatePassword(false);
                toast.error(err.message);
            });
    };

    return (
        <ProfileWrapper>
            <Typography variant="h6" weight="medium" align="center">
                Update Password
            </Typography>
            {/* <Image/> Maybe will add image later */}
            <PasswordInputWithEye
                placeholder="Old Password"
                password={oldPassword}
                handleOnChangePassword={(value: string) => {
                    setOldPassword(value);
                }}
                isFormSubmitting={isFormSubmitting}
                focusRef={focusRef}
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
                    setShowUpdatePassword(true);
                }}
            >
                Update
            </Button>
            <ConfirmationModal
                confirmationMessage="Are you sure you want to update your Password?"
                show={showUpdatePassword}
                confirmButtonColor="primary"
                cancel={() => {
                    setShowUpdatePassword(false);
                }}
                onConfirm={updatePassword}
            />
        </ProfileWrapper>
    );
};

export { TeamMemberUser };
