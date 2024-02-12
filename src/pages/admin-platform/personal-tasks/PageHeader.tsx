import { Button } from "../../../design-system";
import { PageHeaderBase, PageTitle } from "../../components";

const PageHeader: React.FC<{ openCreateTaskModal: () => void }> = ({
    openCreateTaskModal
}) => {
    return (
        <PageHeaderBase>
            <PageTitle variant="h6" weight="medium">
                Personal Tasks
            </PageTitle>
            <Button
                variant="contained"
                color="primary"
                size="md"
                shape="rounded"
                onClick={openCreateTaskModal}
            >
                Create A Task
            </Button>
        </PageHeaderBase>
    );
};

export { PageHeader };
