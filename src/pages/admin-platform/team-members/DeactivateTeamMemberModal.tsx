import toast from "react-hot-toast";
import { teamMemberService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, AdminDeactivateTeamMemberAction } from "../../../store";
import { ConfirmationModal } from "../../components";

type DeactivateTeamMemberModalProps = {
    show: boolean;
    teamMemberId: string;
    closeModal: () => void;
};

const DeactivateTeamMemberModal: React.FC<DeactivateTeamMemberModalProps> = ({
    show,
    closeModal,
    teamMemberId
}) => {
    const { dispatch } = useStore();
    const deactivateTeamMember = () => {
        teamMemberService
            .deactivate(teamMemberId)
            .then((_) => {
                const action: AdminDeactivateTeamMemberAction = {
                    type: Actions.ADMIN_DEACTIVATE_TEAM_MEMBER,
                    payload: { id: teamMemberId }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully deactivated");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to deactivate this team member?"
            show={show}
            cancel={closeModal}
            onConfirm={deactivateTeamMember}
            confirmButtonColor="secondary"
        />
    );
};

export { DeactivateTeamMemberModal };
