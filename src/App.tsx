import { Link } from "react-router-dom";
import styled from "styled-components";
import { Badge, DatePickerV1, Icon } from "./design-system";
import { useState } from "react";
import { OptionValue, Select } from "./design-system/Select";
import { Checkbox, Switch } from "./design-system";
import { LinearProgress } from "./design-system/Progress";
import { TableBodyCell } from "./design-system/Table";

const AppWrapper = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    font-size: 2rem;
`;

const App = () => {
    const [date, setDate] = useState<Date>();
    const [value, setValue] = useState<OptionValue>("");
    const [value2, setValue2] = useState(false);
    const [value3, setValue3] = useState(false);

    return (
        <AppWrapper>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/login">Admin Login</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>

            <Link to="admin/platform">Admin Platform</Link>
            <Link to="admin/platform/projects">Admin Projects</Link>
            <Link to="admin/platform/stories">Admin Stories</Link>
            <Link to="admin/platform/personal-tasks">Admin Personal Tasks</Link>
            <Link to="admin/platform/team-members">Admin Team Members</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/login">Team Member Login</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>
            <Link to="team-member/platform">Team Member Platform</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">Team Member Stories</Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Personal Tasks
            </Link>
            <Select
                options={[
                    { label: "Option1", value: "option1" },
                    { label: "Option2", value: "option2" },
                    { label: "Option3", value: "option3" },
                    { label: "Option4", value: "option4" },
                    { label: "Option5", value: "option5" },
                    { label: "Option6", value: "option6" }
                ]}
                headerPlaceholder="Select Option"
                onSelect={(option) => setValue(option.value)}
                size="md"
                shape="circle"
                value={value}
            />
            <Checkbox
                label="Hello world"
                id="checkbox"
                checked={value2}
                onChange={(value2) => setValue2(value2)}
                shape="rounded"
            />
            <Switch
                checked={value3}
                onSwitch={(value3) => setValue3(value3)}
                shape="circle"
                id="switch"
                position="end"
            />
            <Badge
                color="orange"
                label="DONE"
                shape="rounded"
                variant="outlined"
            />
            <Badge
                label="Badge"
                shape="rounded"
                variant="contained"
                color="gray"
                iconName="flag"
            />
            <div>
                <LinearProgress value={50} color="orange" error />
                <LinearProgress value={40} color="blue" />
                <LinearProgress value={40} color="green" />
                <LinearProgress value={40} color="red" />
                <LinearProgress
                    value={50}
                    color="orange"
                    error
                    shape="rounded"
                />
                <LinearProgress
                    value={40}
                    color="blue"
                    shape="rounded"
                    size="md"
                />
                <LinearProgress
                    value={100}
                    color="green"
                    shape="rounded"
                    size="lg"
                />
                <LinearProgress value={40} color="red" error shape="rounded" />

                <LinearProgress value={99} />
            </div>
            <TableBodyCell align="center">Hello</TableBodyCell>
        </AppWrapper>
    );
};
export { App };
