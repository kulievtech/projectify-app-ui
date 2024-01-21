import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateProjectModalTitle = styled(Typography)`
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

const AdminPersonalTasks = () => {
    const [personalTasks, setPersonalTasks] = useState<string[]>([]);
    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    return (
        <PageBase>
            {!personalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any personal tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <h1>personal tasks</h1>
            )}

            <Modal show={showCreateTaskModal} position="center">
                <CreateProjectModalTitle variant="paragraphLG" weight="medium">
                    New Task
                </CreateProjectModalTitle>
                <Inputs>
                    <Input
                        placeholder="Title"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="textarea"
                        placeholder="Description"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Due Date"
                        value=""
                        onChange={() => {}}
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
                        onClick={() => setShowCreateTaskModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { AdminPersonalTasks };
