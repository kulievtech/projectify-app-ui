import toast from "react-hot-toast";
import { teamMemberService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, AdminReactivateTeamMemberAction } from "../../../store";
import { ConfirmationModal } from "../../components";

type ReactivateTeamMemberModalProps = {
    show: boolean;
    teamMemberId: string;
    closeModal: () => void;
};

const ReactivateTeamMemberModal: React.FC<ReactivateTeamMemberModalProps> = ({
    show,
    closeModal,
    teamMemberId
}) => {
    const { dispatch } = useStore();
    const reactivateTeamMember = () => {
        teamMemberService
            .reactivate(teamMemberId)
            .then((_) => {
                const action: AdminReactivateTeamMemberAction = {
                    type: Actions.ADMIN_REACTIVATE_TEAM_MEMBER,
                    payload: { id: teamMemberId }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully reactivated");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to reactivate this team member?"
            show={show}
            cancel={closeModal}
            onConfirm={reactivateTeamMember}
            confirmButtonColor="primary"
        />
    );
};

export { ReactivateTeamMemberModal };
