import format from "date-fns/format";
import { Badge, BadgeColors, Typography } from "../../../design-system";
import {
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow
} from "../../../design-system/Table";
import { TeamMember } from "../../../types";

type TeamMembersTableProps = {
    data: TeamMember[];
};

const columns = ["15%", "15%", "22.5%", "20%", "15%", "12.5%"];

const mapsStatusToBadgeColors = {
    ACTIVE: "violet",
    INACTIVE: "gray",
    DEACTIVATED: "red"
};

const TeamMembersTable: React.FC<TeamMembersTableProps> = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow columns={columns}>
                    <TableHeadCell>First Name</TableHeadCell>
                    <TableHeadCell>Last Name</TableHeadCell>
                    <TableHeadCell>Position</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Join Date</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((teamMember) => {
                    return (
                        <TableRow key={teamMember.id} columns={columns}>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
                                    {teamMember.firstName}
                                </Typography>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
                                    {teamMember.lastName}
                                </Typography>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
                                    {teamMember.position}
                                </Typography>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
                                    {teamMember.email}
                                </Typography>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
                                    {format(
                                        teamMember.joinDate,
                                        "MMMM d, yyyy"
                                    )}
                                </Typography>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Typography
                                    variant="paragraphSM"
                                    weight="medium"
                                >
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
                                </Typography>
                            </TableBodyCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export { TeamMembersTable };
