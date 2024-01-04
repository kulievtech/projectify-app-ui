import { useState } from "react";
import { Toggle } from "./design-system";

const App = () => {
    const [value, setValue] = useState<boolean>(false);

    const handleOnToggle = (value: boolean) => {
        setValue(value);
    };

    return (
        <div style={{ padding: "300px" }}>
            <Toggle value={value} onToggle={handleOnToggle} />
        </div>
    );
};
export { App };
