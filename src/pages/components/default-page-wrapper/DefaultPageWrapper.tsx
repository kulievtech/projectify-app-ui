import { FC, ReactNode } from "react";
import { Button, Typography } from "../../../design-system";
import "./DefaultPageWrapper.css";

type DefaultPageWrapperProps = {
    imagePath: string;
    pageTitle: string;
    btnText: string;
};

const DefaultPageWrapper: FC<DefaultPageWrapperProps> = ({
    imagePath,
    pageTitle,
    btnText
}) => {
    return (
        <div className="default-page-wrapper">
            <div className="default-page__content">
                <img src={imagePath} alt={pageTitle} />
                <Typography variant="paragraphLG" className="page-title">
                    {pageTitle}
                </Typography>
                <Button
                    shape="rounded"
                    color="primary"
                    size="lg"
                    className="btn"
                >
                    {btnText}
                </Button>
            </div>
        </div>
    );
};

export { DefaultPageWrapper };
