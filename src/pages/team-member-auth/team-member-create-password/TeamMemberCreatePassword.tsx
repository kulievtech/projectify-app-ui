import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";

import teamWork from "../../../assets/images/team-work.jpg";
import "./TeamMemberCreatePassword.css";

const TeamMemberCreatePassword = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const createPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, passwordConfirm);
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Create Password">
            <form
                className="create-password"
                onSubmit={createPassword}
                noValidate
            >
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    className="create-password__email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="create-password__submit-button"
                >
                    Create Password
                </Button>
            </form>
        </AuthWrapper>
    );
};

export { TeamMemberCreatePassword };
