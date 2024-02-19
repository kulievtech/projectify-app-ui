import format from "date-fns/format";
import styled from "styled-components";
import {
    Badge,
    BadgeColors,
    Menu,
    MenuOption,
    Typography
} from "../../../design-system";
import {
    Table,
    TableBody,
    TableBodyCellBase,
    TableHead,
    TableHeadCell,
    TableRow
} from "../../../design-system/Table";
import { TeamMember } from "../../../types";
import { useState } from "react";
import { DeleteTeamMemberModal } from "./DeleteTeamMemberModal";
import { DeactivateTeamMemberModal } from "./DeactivateTeamMemberModal";
import { ReactivateTeamMemberModal } from "./ReactivateTeamMemberModal";
import { EditTeamMemberModal } from "./EditTeamMemberModal";
import { parseISO } from "date-fns";
import { Scrollable } from "../../components";

type TeamMembersTableProps = {
    data: TeamMember[];
};

const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

enum TeamMemberActions {
    edit = "edit",
    delete = "delete",
    reactivate = "reactivate",
    deactivate = "deactivate"
}
const options: MenuOption[] = [
    { label: "Edit", iconName: "edit", value: "edit", color: "primary" },
    {
        label: "Reactivate",
        iconName: "check-in-circle",
        value: "reactivate",
        color: "primary"
    },
    { label: "Delete", iconName: "delete", value: "delete", color: "danger" },
    {
        label: "Deactivate",
        iconName: "x-in-circle",
        value: "deactivate",
        color: "danger"
    }
];

const allowedActions = {
    ACTIVE: [options[0], options[3]],
    INACTIVE: [options[0], options[2]],
    DEACTIVATED: [options[0], options[1]]
};

const columns = ["12.5%", "12.5%", "20%", "20%", "15%", "15%", "5%"];
const mapsStatusToBadgeColors = {
    ACTIVE: "violet",
    INACTIVE: "gray",
    DEACTIVATED: "red"
};

const TeamMembersTable: React.FC<TeamMembersTableProps> = ({ data }) => {
    const [selectedTeamMemberId, setSelectedTeamMemberId] = useState("");
    const [showDeleteTeamMemberModal, setShowDeleteTeamMemberModal] =
        useState(false);

    const [showDeactivateTeamMemberModal, setShowDeactivateTeamMemberModal] =
        useState(false);

    const [showReactivateTeamMemberModal, setShowReactivateTeamMemberModal] =
        useState(false);

    const [showUpdateTeamMemberModal, setShowUpdateTeamMemberModal] =
        useState(false);

    const onSelectActionCellMenu = (
        teamMemberId: string,
        action: TeamMemberActions
    ) => {
        setSelectedTeamMemberId(teamMemberId);

        if (action === "delete") {
            setShowDeleteTeamMemberModal(true);
        } else if (action === "deactivate") {
            setShowDeactivateTeamMemberModal(true);
        } else if (action === "reactivate") {
            setShowReactivateTeamMemberModal(true);
        } else if (action === "edit") {
            setShowUpdateTeamMemberModal(true);
        }
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow columns={columns}>
                        <TableHeadCell>First Name</TableHeadCell>
                        <TableHeadCell>Last Name</TableHeadCell>
                        <TableHeadCell>Position</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Join Date</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((teamMember) => {
                        return (
                            <TableRow key={teamMember.id} columns={columns}>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {teamMember.firstName}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {teamMember.lastName}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {teamMember.position}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {teamMember.email}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {format(
                                            parseISO(teamMember.joinDate),
                                            "MMM d, yyyy"
                                        )}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Badge
                                        color={
                                            mapsStatusToBadgeColors[
                                                teamMember.status
                                            ] as BadgeColors
                                        }
                                        label={teamMember.status}
                                        variant="outlined"
                                        shape="rounded"
                                        status
                                    />
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Menu
                                        options={
                                            allowedActions[teamMember.status]
                                        }
                                        onSelect={(value) =>
                                            onSelectActionCellMenu(
                                                teamMember.id,
                                                value as TeamMemberActions
                                            )
                                        }
                                    />
                                </TableBodyCellBase>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <DeleteTeamMemberModal
                show={showDeleteTeamMemberModal}
                teamMemberId={selectedTeamMemberId}
                closeModal={() => setShowDeleteTeamMemberModal(false)}
            />
            <DeactivateTeamMemberModal
                show={showDeactivateTeamMemberModal}
                teamMemberId={selectedTeamMemberId}
                closeModal={() => setShowDeactivateTeamMemberModal(false)}
            />
            <ReactivateTeamMemberModal
                show={showReactivateTeamMemberModal}
                teamMemberId={selectedTeamMemberId}
                closeModal={() => setShowReactivateTeamMemberModal(false)}
            />
            <EditTeamMemberModal
                show={showUpdateTeamMemberModal}
                teamMemberId={selectedTeamMemberId}
                closeModal={() => setShowUpdateTeamMemberModal(false)}
            />
        </TableContainer>
    );
};

export { TeamMembersTable };
