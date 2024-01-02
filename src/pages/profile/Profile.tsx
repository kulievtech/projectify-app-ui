import React, { useState, FC } from "react";

import "./Profile.css";
import { MainLayout } from "../components";
import { Typography, Input, Button } from "../../design-system";
import admin from "../../assets/images/admin1.png";

type ProfileProps = {
    imagePath?: string;
    firstName?: string;
    lastName?: string;
    preferredFirstName?: string;
    oldPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
};

const Profile: FC<ProfileProps> = ({
    imagePath,
    firstName: propFirstName,
    lastName: propLastName,
    preferredFirstName: propPreferredName,
    oldPassword,
    newPassword,
    confirmNewPassword
}) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [preferredName, setPreferredName] = useState<string>("");

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangeName = (value: string) => {
        setPreferredName(value);
    };

    return (
        <MainLayout>
            <form className="profile">
                <Typography
                    variant="h6"
                    weight="medium"
                    align="left"
                    className="title"
                >
                    Profile
                </Typography>
                <img src={admin} alt={`${firstName} ${lastName}`} />
                <Input
                    labelText="First Name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    labelText="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    labelText="Preferred First Name"
                    type="text"
                    placeholder="Preferred First Name"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Old Password"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="New Password"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={preferredName}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    disabled={true}
                    fullWidth={true}
                >
                    Update
                </Button>
            </form>
        </MainLayout>
    );
};

export { Profile };
