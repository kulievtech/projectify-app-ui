import { useState } from "react";
import { OptionValue, Option } from "../../../design-system";
import { NoDataPlaceholder, PageHeader } from "../../components";
import noProject from "../../../assets/illustrations/no-project.svg";
import { ProjectFilters } from "./ProjectsFilters";
import { ProjectsTable } from "./ProjectsTable";
import { CreateProjectModal } from "./CreateProjectModal";
import { useStore } from "../../../hooks";
import { Project } from "../../../types";

const AdminProjects = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

    const [status, setStatus] = useState<OptionValue>();

    const handleSetStatus = (value: Option) => {
        setStatus(value.value);
    };

    const {
        state: { projects },
        dispatch
    } = useStore();

    const handleSortByStatus = (status: OptionValue) => {
        let sortedProjects: Project[] = [];

        if (status === "ACTIVE") {
            const activeProjects = projects.filter(
                (project) => project.status === "ACTIVE"
            );
            const otherProjects = projects.filter(
                (project) => project.status !== "ACTIVE"
            );
            sortedProjects = [...activeProjects, ...otherProjects];
        } else if (status === "ARCHIVED") {
            const archivedProjects = projects.filter(
                (project) => project.status === "ARCHIVED"
            );
            const otherProjects = projects.filter(
                (project) => project.status !== "ARCHIVED"
            );
            sortedProjects = [...archivedProjects, ...otherProjects];
        } else if (status === "DEFAULT") {
            return projects;
        }
        return sortedProjects;
    };

    const sortedProjects = status ? handleSortByStatus(status) : projects;

    return (
        <>
            {!projects.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don’t have any projects yet!"
                    buttonText="Add a Project"
                    buttonAction={() => setShowCreateProjectModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Projects"
                        actionButtonText="Create A Project"
                        actionButtonOnClick={() =>
                            setShowCreateProjectModal(true)
                        }
                    />
                    <ProjectFilters
                        status={status}
                        handleSetStatus={handleSetStatus}
                    />
                    <ProjectsTable data={sortedProjects} />
                </>
            )}
            <CreateProjectModal
                show={showCreateProjectModal}
                closeModal={() => setShowCreateProjectModal(false)}
            />
        </>
    );
};

export { AdminProjects };
