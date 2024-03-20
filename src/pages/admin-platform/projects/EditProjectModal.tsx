import styled from "styled-components";
import toast from "react-hot-toast";

import {
    Input,
    Button,
    Typography,
    DatePickerV1,
    Modal
} from "../../../design-system";
import { useEffect, useState } from "react";
import { toDateObj, toIso8601 } from "../../../utils";
import { useStore } from "../../../hooks";
import { Actions, UpdateProjectAction } from "../../../store";
import { ProjectUpdate } from "../../../types";
import { adminProjectService } from "../../../api/admin/adminProjects";

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
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();
    const { state } = useStore();

    useEffect(() => {
        const { projects } = state;
        const project = projects[projectId];
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setStartDate(toDateObj(project.startDate));
            setEndDate(toDateObj(project.endDate));
        }
    }, [projectId]);

    const { dispatch } = useStore();

    const onChangeName = (value: string) => {
        setName(value);
    };

    const onChangeDescription = (value: string) => {
        setDescription(value);
    };

    const onChangeStartDate = (date: Date) => {
        setStartDate(date);
    };

    const onChangeEndDate = (date: Date) => {
        setEndDate(date);
    };

    const cancel = () => {
        closeModal();
    };

    const updateProject = () => {
        const input: ProjectUpdate = {};
        if (name) {
            input.name = name;
        }
        if (description) {
            input.description = description;
        }
        if (startDate && endDate) {
            input.startDate = toIso8601(startDate);
            input.endDate = toIso8601(endDate);
        }

        adminProjectService
            .update(projectId, input)
            .then((_) => {
                const action: UpdateProjectAction = {
                    type: Actions.UPDATE_PROJECT,
                    payload: {
                        id: projectId,
                        data: input
                    }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully updated"!);
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Project
            </ModalTitle>
            <Inputs>
                <Input
                    placeholder="Project Name"
                    value={name}
                    onChange={onChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Project Description"
                    value={description}
                    onChange={onChangeDescription}
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Star Date"
                    onChange={onChangeStartDate}
                    selected={startDate}
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="End Date"
                    onChange={onChangeEndDate}
                    selected={endDate}
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={cancel}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={updateProject}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditProjectModal };
