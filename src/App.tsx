import { DefaultPageWrapper } from "./pages/components";
import { MainLayout } from "./pages/components/main-layout/MainLayout";
import projectImg from "./assets/images/123.svg";

const App = () => {
    return (
        <MainLayout>
            <DefaultPageWrapper
                imagePath={projectImg}
                pageTitle="You don't have any projects yet!"
                btnText="Add a project"
            ></DefaultPageWrapper>
        </MainLayout>
    );
};

export { App };
