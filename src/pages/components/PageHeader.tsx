import { Button } from "../../design-system";
import { PageHeaderBase, PageTitle } from ".";

type PageHeaderProps = {
    pageTitle: string;
    actionButtonText: string;
    actionButtonOnClick: () => void;
};
const PageHeader: React.FC<PageHeaderProps> = ({
    pageTitle,
    actionButtonText,
    actionButtonOnClick
}) => {
    return (
        <PageHeaderBase>
            <PageTitle variant="h6" weight="medium">
                {pageTitle}
            </PageTitle>
            <Button
                variant="contained"
                color="primary"
                size="md"
                shape="rounded"
                onClick={actionButtonOnClick}
            >
                {actionButtonText}
            </Button>
        </PageHeaderBase>
    );
};

export { PageHeader };
