import { Button, Typography, Input } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Typography variant="h5">Hello</Typography>
            <Button size="md" color="primary">
                Test
            </Button>
            <Button size="lg" color="primary">
                Test
            </Button>
            <Button size="sm" color="danger" shape="circle">
                Welcome To TypeScript
            </Button>
            <form onSubmit={() => alert("submitted")}>
                <Input
                    type="email"
                    placeholder="Email"
                    size="md"
                    shape="rounded"
                    labelText="Email"
                />
                <Input
                    placeholder="First Name"
                    size="md"
                    shape="rounded"
                    labelText="First Name"
                />
                <Input
                    placeholder="Last Name"
                    size="md"
                    shape="rounded"
                    labelText="Last Name"
                />
                <Input
                    placeholder="About You"
                    size="lg"
                    type="textarea"
                    shape="rounded"
                    labelText="Tell us about yourself"
                    hintMessage="This is for your password"
                />

                <Button>Submit</Button>
            </form>
        </div>
    );
};

export { App };
