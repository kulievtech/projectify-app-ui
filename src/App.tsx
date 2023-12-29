import { useState } from "react";
import { Button, Typography, Input, Modal } from "./design-system";

const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div style={{ padding: "100px" }}>
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>
            <Modal show={showModal} position="right">
                <span onClick={() => setShowModal(false)}>X</span>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}
                >
                    <Typography variant="h6">Hello</Typography>
                    <Input
                        placeholder="Email"
                        type="email"
                        value=""
                        onChange={(char) => console.log(char)}
                        shape="rounded"
                        size="lg"
                    />

                    <Button
                        color="primary"
                        shape="rounded"
                        onClick={() => setShowModal(false)}
                    >
                        Submit
                    </Button>
                </form>
            </Modal>
        </div>
    );
};

<button type="submit"></button>;

export { App };
