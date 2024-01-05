import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper } from "../../components";
import teamWork from "../../../assets/images/team-work.jpg";
import styled from "styled-components";

const Form = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const TeamMemberLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <AuthWrapper imageUrl={teamWork} pageTitle="Login">
            <Form onSubmit={login} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Login
                </Button>
            </Form>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };
