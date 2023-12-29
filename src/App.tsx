import { useState } from "react";
import { Button, Typography, Input, Modal, Avatar } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Avatar shape="rounded" size="lg">
                Tohir Kuliev
            </Avatar>

            <Avatar shape="circle" size="lg">
                Tohir Kuliev
            </Avatar>

            <Avatar shape="rounded" size="lg" imagePath="../image.png" />

            <Avatar shape="circle" size="lg" imagePath="../image.png" />
        </div>
    );
};

export { App };
