import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Modal,
    Typography,
    Button,
    Input,
    DatePickerV1,
    Select
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { TeamMemberUpdateInput, teamMemberService } from "../../../api";
import toast from "react-hot-toast";
import { Actions, AdminUpdateTeamMemberAction } from "../../../store";
import { positions } from "./CreateTeamMemberModal";
import { TeamMemberStatus } from "../../../types";

type EditTeamMemberModalProps = {
    show: boolean;
    closeModal: () => void;
    teamMemberId: string;
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
const EditTeamMemberModal: React.FC<EditTeamMemberModalProps> = ({
    show,
    closeModal,
    teamMemberId
}) => {
    const {
        dispatch,
        state: { teamMembers }
    } = useStore();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState<TeamMemberStatus>();
    const [joinDate, setJoinDate] = useState<Date>();
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    useEffect(() => {
        const teamMember = teamMembers.find(
            (teamMember) => teamMember.id === teamMemberId
        );

        if (teamMember) {
            setFirstName(teamMember.firstName);
            setLastName(teamMember.lastName);
            setEmail(teamMember.email);
            setStatus(teamMember.status);
            setPosition(teamMember.position);
            setJoinDate(teamMember.joinDate);
        }
    }, [teamMemberId]);

    const updateTeamMember = () => {
        const updatedTeamMember: TeamMemberUpdateInput = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            position: position,
            joinDate: joinDate
        };
        setIsFormSubmitting(true);
        teamMemberService
            .updateTeamMember(teamMemberId, updatedTeamMember)
            .then((_) => {
                setIsFormSubmitting(false);
                const action: AdminUpdateTeamMemberAction = {
                    type: Actions.ADMIN_UPDATE_TEAM_MEMBER,
                    payload: {
                        id: teamMemberId,
                        status: status!,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        position: position,
                        joinDate: joinDate as Date
                    }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                setIsFormSubmitting(true);
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                Edit Team Member
            </ModalTitle>
            <Inputs>
                <Input
                    value={firstName}
                    onChange={(value) => setFirstName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={lastName}
                    onChange={(value) => setLastName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    value={email}
                    onChange={(value) => setEmail(value)}
                    shape="rounded"
                    size="lg"
                />
                <Select
                    options={positions}
                    onSelect={(option) => setPosition(option.label)}
                    value={position}
                    size="lg"
                    shape="rounded"
                    headerPlaceholder="Select Position"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Select Join Date"
                    selected={joinDate}
                    onChange={(date) => setJoinDate(date)}
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
                    onClick={updateTeamMember}
                    disabled={isFormSubmitting}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditTeamMemberModal };
