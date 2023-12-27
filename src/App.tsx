import { useState, useId } from "react";
import { Button, Typography, Input, Label } from "./design-system";

const App = () => {
    const [value, setValue] = useState<string>("");
    const [text, setText] = useState<string>("");

    const handleOnChange = (value: string) => {
        console.log(value);
        setValue(value);
    };

    const handleOnChangeTextarea = (value: string) => {
        setText(value);
    };
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>

            <form onSubmit={() => alert(`${value} ${text}`)} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                    onChange={handleOnChange}
                    value={value}
                />

                <Input
                    type="textarea"
                    placeholder="About me"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                    onChange={handleOnChangeTextarea}
                    value={text}
                />

                <Button color="primary" shape="rounded">
                    Submit
                </Button>
            </form>
        </div>
    );
};

<button type="submit"></button>;

export { App };
