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
import { Project } from "../../../types";
import { useState } from "react";
import { parseISO } from "date-fns";
import { Scrollable } from "../../components";

type ProjectsTableProps = {
    data: Project[];
};

const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

enum ProjectActions {
    edit = "edit",
    delete = "delete",
    reactivate = "reactivate",
    archive = "archive"
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
        label: "Archive",
        iconName: "x-in-circle",
        value: "archive",
        color: "secondary"
    }
];

const allowedActions = {
    ACTIVE: [options[0], options[3]],
    ARCHIVED: [options[0], options[1], options[2]],
    COMPLETED: [options[2], options[3]]
};

const columns = ["12.5%", "15.5%", "10%", "20%", "12%", "25%", "5%"];
const mapsStatusToBadgeColors = {
    ACTIVE: "violet",
    ARCHIVED: "gray",
    COMPLETED: "green"
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");

    const onSelectActionCellMenu = (
        projectId: string,
        action: ProjectActions
    ) => {
        setSelectedProjectId(projectId);
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow columns={columns}>
                        <TableHeadCell>Name</TableHeadCell>
                        <TableHeadCell>Description</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Progress</TableHeadCell>
                        <TableHeadCell>Due Date</TableHeadCell>
                        <TableHeadCell>Team Members</TableHeadCell>
                        <TableHeadCell> </TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((project) => {
                        return (
                            <TableRow key={project.id} columns={columns}>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.name}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {project.description}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Badge
                                        color={
                                            mapsStatusToBadgeColors[
                                                project.status
                                            ] as BadgeColors
                                        }
                                        label={project.status}
                                        variant="outlined"
                                        shape="rounded"
                                        status
                                    />
                                </TableBodyCellBase>
                                <TableBodyCellBase>Hello</TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Typography
                                        variant="paragraphSM"
                                        weight="medium"
                                    >
                                        {format(
                                            parseISO(project.dueDate),
                                            "MMM d, yyyy"
                                        )}
                                    </Typography>
                                </TableBodyCellBase>
                                <TableBodyCellBase>Hello</TableBodyCellBase>
                                <TableBodyCellBase>
                                    <Menu
                                        options={allowedActions[project.status]}
                                        onSelect={(value) =>
                                            onSelectActionCellMenu(
                                                project.id,
                                                value as ProjectActions
                                            )
                                        }
                                    />
                                </TableBodyCellBase>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { ProjectsTable };
