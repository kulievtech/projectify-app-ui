import { FC, ReactNode } from "react";
import "./PasswordWrapper.css";
import { Button, Typography } from "../../../design-system";

type PasswordWrapperProps = {
    pageTitle: string;
    imagePath: string;
    children: ReactNode;
    btnText: string;
};

const PasswordWrapper: FC<PasswordWrapperProps> = ({
    pageTitle,
    imagePath,
    children,
    btnText
}) => {
    return (
        <main className="password-wrapper">
            <section className="password-wrapper__form">
                <div className="password-wrapper__content">
                    <Typography variant="h6" weight="semibold" align="center">
                        {pageTitle}
                    </Typography>
                    <img src={imagePath} alt={pageTitle} />
                    {children}
                    <Button>{btnText}</Button>
                </div>
            </section>
        </main>
    );
};

export { PasswordWrapper };
