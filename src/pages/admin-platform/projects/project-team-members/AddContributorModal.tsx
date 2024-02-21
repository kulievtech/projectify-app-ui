import React, { useState } from "react";
import { useStore } from "../../../../hooks";
import { formatISO } from "date-fns";
import { adminProjectsService } from "../../../../api/admin/adminProjects";
import { Actions, AdminAddContributorProjectAction } from "../../../../store";
import toast from "react-hot-toast";
import {
    Button,
    DatePickerV1,
    Input,
    Modal,
    Typography
} from "../../../../design-system";
import styled from "styled-components";

type AddProjectContributorProps = {
    show: boolean;
    closeModal: () => void;
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

const AddContributorModal: React.FC<AddProjectContributorProps> = ({
    show,
    closeModal
}) => {
    const [teamMemberId, setTeamMemberId] = useState("");
    const [projectId, setProjectId] = useState("");

    const [joinDate, setJoinDate] = useState<Date>();

    const { dispatch } = useStore();

    const handleOnTeamMemberId = (value: string) => {
        setTeamMemberId(value);
    };

    const handleOnProjectId = (value: string) => {
        setProjectId(value);
    };

    const handleOnSelectJoinDate = (value: Date) => {
        setJoinDate(value);
    };

    const resetFields = () => {
        setTeamMemberId("");
        setProjectId("");

        setJoinDate(undefined);
    };

    const createContributor = () => {
        const input = {
            teamMemberId,
            projectId,
            joinDate: formatISO(joinDate!)
        };
        try {
            adminProjectsService
                .addContributor(input)
                .then((data) => {
                    const action: AdminAddContributorProjectAction = {
                        type: Actions.ADMIN_PROJECT_ADD_CONTRIBUTOR,
                        payload: data.data
                    };
                    dispatch(action);
                    resetFields();
                    closeModal();
                    toast.success("Contributor has been successfully created.");
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        } catch (e) {
            const error = e as Error;
            toast.error(error.message);
        }
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Contributor
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Project Id"
                    value={projectId}
                    onChange={handleOnProjectId}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Team Member Id"
                    value={teamMemberId}
                    onChange={handleOnTeamMemberId}
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Join Date"
                    selected={joinDate}
                    onChange={handleOnSelectJoinDate}
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
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={createContributor}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { AddContributorModal };
