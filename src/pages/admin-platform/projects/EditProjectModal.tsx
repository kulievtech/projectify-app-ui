import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Modal,
    Typography,
    Button,
    Input,
    DatePickerV1
} from "../../../design-system";
import { useStore } from "../../../hooks";
import toast from "react-hot-toast";
import { Actions, AdminUpdateProjectAction } from "../../../store";
import { ProjectStatus } from "../../../types";
import { formatISO, parseISO } from "date-fns";
import {
    ProjectUpdateInput,
    adminProjectsService
} from "../../../api/admin/adminProjects";

type EditProjectModalProps = {
    show: boolean;
    closeModal: () => void;
    projectId: string;
};

const ModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;
const EditProjectModal: React.FC<EditProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const {
        dispatch,
        state: { projects }
    } = useStore();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState<Date>();
    const [status, setStatus] = useState<ProjectStatus>();
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    useEffect(() => {
        const project = projects.find((project) => project.id === projectId);

        if (project) {
            setName(project.name);
            setDescription(project.description);
            setStatus(project.status);
            setDueDate(parseISO(project.dueDate));
        }
    }, [projectId]);

    const updateProject = () => {
        const updatedProject: ProjectUpdateInput = {
            name: name,
            description: description,
            dueDate: formatISO(dueDate!)
        };
        setIsFormSubmitting(true);
        adminProjectsService
            .updateProject(projectId, updatedProject)
            .then((_) => {
                setIsFormSubmitting(false);
                const action: AdminUpdateProjectAction = {
                    type: Actions.ADMIN_UPDATE_PROJECT,
                    payload: {
                        id: projectId,
                        status: status!,
                        name: name,
                        description: description,
                        dueDate: formatISO(dueDate!)
                    }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(false);
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                Edit Project
            </ModalTitle>
            <Inputs>
                <Input
                    labelText="Project Name"
                    value={name}
                    onChange={(value) => setName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    labelText="Project Description"
                    value={description}
                    onChange={(value) => setDescription(value)}
                    shape="rounded"
                    size="lg"
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={closeModal}
                    disabled={isFormSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={updateProject}
                    disabled={isFormSubmitting}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditProjectModal };
