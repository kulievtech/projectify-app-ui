import styled from "styled-components";
import { Option, OptionValue, Select } from "../../../design-system";

const FiltersBase = styled.section`
    display: grid;
    grid-template-columns: 20rem 1fr 20rem;
    align-items: center;
    margin-bottom: var(--space-20);
    .filter-by-project {
        grid-column: 1 / 2;
    }
    .filter-by-status {
        grid-column: 3 / 4;
    }
`;

const statusOptions = [
    { label: "Active", value: "ACTIVE" },
    { label: "ARCHIVED", value: "ARCHIVED" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Default", value: "DEFAULT" }
];

type TeamMemberFiltersProps = {
    status: OptionValue | undefined;
    handleSetStatus: (value: Option) => void;
};

const ProjectFilters: React.FC<TeamMemberFiltersProps> = ({
    status,
    handleSetStatus
}) => {
    return (
        <FiltersBase>
            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="By Project"
                className="filter-by-project"
            />
            <Select
                value={status}
                onSelect={handleSetStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
        </FiltersBase>
    );
};

export { ProjectFilters };
