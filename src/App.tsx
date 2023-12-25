import { Button, Typography } from "./design-system";

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
        </div>
    );
};

export { App };
