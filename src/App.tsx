import { useState } from "react";
import { Button, Typography, Input, Modal, Avatar } from "./design-system";

import avatar from "./design-system/Avatar/assets/image.png";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Avatar shape="rounded" size="lg">
                Tohir Kuliev
            </Avatar>

            <Avatar shape="circle" size="lg">
                Tohir Kuliev
            </Avatar>

            <Avatar shape="rounded" size="lg" imagePath={avatar} />

            <Avatar shape="circle" size="lg" imagePath={avatar} />
        </div>
    );
};

export { App };
