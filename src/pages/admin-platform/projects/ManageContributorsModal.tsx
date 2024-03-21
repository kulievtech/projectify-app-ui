import { useEffect, useState } from "react";
import { Modal } from "../../../design-system";
import { useStore } from "../../../hooks";
import {
    Actions,
    AdminPopulateProjectContributorsAction
} from "../../../store";
import toast from "react-hot-toast";
import { adminProjectService } from "../../../api/admin/adminProjects";
import { AssignedContributors } from "./AssignedContributors";
import { NotAssignedContributors } from "./NotAssignedContributors";

type Props = {
    projectId: string;
    show: boolean;
    closeModal: () => void;
};

const ManageContributorsModal: React.FC<Props> = ({
    projectId,
    show,
    closeModal
}) => {
    const [showNotAssignedContributors, setShowNotAssignedContributors] =
        useState(false);

    const { state, dispatch } = useStore();

    useEffect(() => {
        if (projectId && show) {
            adminProjectService
                .getContributors(projectId)
                .then(({ data }) => {
                    const action: AdminPopulateProjectContributorsAction = {
                        type: Actions.ADMIN_POPULATE_PROJECT_CONTRIBUTORS,
                        payload: {
                            id: projectId,
                            data: data
                        }
                    };
                    dispatch(action);
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        }
    }, [projectId, show]);

    if (!projectId) return null;

    return (
        <Modal show={show} position="right">
            {showNotAssignedContributors ? (
                <NotAssignedContributors
                    notAssignedContributors={
                        state.projects[projectId].contributors
                            ?.notAssignedContributors
                    }
                    goBack={() => setShowNotAssignedContributors(false)}
                />
            ) : (
                <AssignedContributors
                    projectId={projectId}
                    closeModal={closeModal}
                    contributors={
                        state.projects[projectId].contributors
                            ?.assignedContributors
                    }
                    showNotAssignedContributors={() =>
                        setShowNotAssignedContributors(true)
                    }
                />
            )}
        </Modal>
    );
};

export { ManageContributorsModal };
