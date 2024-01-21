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

const AdminTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState<string[]>([]);
    const [showCreateTeamMemberModal, setShowCreateTeamMemberModal] =
        useState<boolean>(false);

    return (
        <PageBase>
            {!teamMembers.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any team members yet!"
                    buttonText="Add a New Member"
                    buttonAction={() => setShowCreateTeamMemberModal(true)}
                />
            ) : (
                <h1>personal tasks</h1>
            )}

            <Modal show={showCreateTeamMemberModal} position="center">
                <CreateProjectModalTitle variant="paragraphLG" weight="medium">
                    New Member
                </CreateProjectModalTitle>
                <Inputs>
                    <Input
                        placeholder="First Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Last Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Position"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
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
                        onClick={() => setShowCreateTeamMemberModal(false)}
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

export { AdminTeamMembers };
