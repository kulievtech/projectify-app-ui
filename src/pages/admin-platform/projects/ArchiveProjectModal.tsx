import toast from "react-hot-toast";
import { useStore } from "../../../hooks";
import { Actions, AdminArchiveProjectAction } from "../../../store";
import { ConfirmationModal } from "../../components";
import { adminProjectsService } from "../../../api/admin/adminProjects";

type ArchiveProjectModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
};

const ArchiveProjectModal: React.FC<ArchiveProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const { dispatch } = useStore();
    const archiveProject = () => {
        adminProjectsService
            .archive(projectId)
            .then((_) => {
                const action: AdminArchiveProjectAction = {
                    type: Actions.ADMIN_ARCHIVE_PROJECT,
                    payload: { id: projectId }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully archived");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to archive this project?"
            show={show}
            cancel={closeModal}
            onConfirm={archiveProject}
            confirmButtonColor="secondary"
        />
    );
};

export { ArchiveProjectModal };
