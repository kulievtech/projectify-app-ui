import toast from "react-hot-toast";
import { useStore } from "../../../hooks";
import { Actions, AdminRemoveProjectAction } from "../../../store";
import { ConfirmationModal } from "../../components";
import { adminProjectsService } from "../../../api/admin/adminProjects";

type DeleteProjectModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
};

const DeleteProjectModal: React.FC<DeleteProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const { dispatch } = useStore();
    const deleteProject = () => {
        adminProjectsService
            .delete(projectId)
            .then((_) => {
                const action: AdminRemoveProjectAction = {
                    type: Actions.ADMIN_REMOVE_PROJECT,
                    payload: { id: projectId }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully removed");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to delete this project?"
            show={show}
            cancel={closeModal}
            onConfirm={deleteProject}
        />
    );
};

export { DeleteProjectModal };
