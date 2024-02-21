import React, { useEffect, useState } from "react";

import { AddContributorModal } from "./AddContributorModal";
import { Option, OptionValue } from "../../../../design-system";

type ProjectContributorsProps = {
    action: () => void;
};

const ProjectContributors: React.FC<ProjectContributorsProps> = ({
    action
}) => {
    useState(false);

    const [status, setStatus] = useState<OptionValue>();

    const handleSetStatus = (value: Option) => {
        setStatus(value.value);
    };

    const contributors = [];

    return (
        <>
            {!contributors.length ? (
                <div>
                    <p>No contributors yet</p>
                    <button onClick={action}>Add a contributor</button>
                </div>
            ) : (
                <div>
                    <h4>Contributor 1</h4>
                    <h4>Contributor 3</h4>
                    <h4>Contributor 4</h4>
                    <h4>Contributor 5</h4>
                </div>
            )}
        </>
    );
};

export { ProjectContributors };
