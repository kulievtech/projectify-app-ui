import { Projects } from "./pages";
import { MainLayout } from "./pages/components";

import { ForgotPassword } from "./pages";

const App = () => {
    return (
        <MainLayout>
            <Projects />
        </MainLayout>
        // <ForgotPassword />
    );
};

export { App };
