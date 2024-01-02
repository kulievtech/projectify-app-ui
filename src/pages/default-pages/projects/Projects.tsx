import { MainLayout } from "../../components";
import { DefaultPageWrapper } from "../../components";

import "./Projects.css";
import image from "../../../assets/images/123.svg";

const projects = [
    {
        name: "Project Management Tool",
        description:
            "A project management tool for tracking tasks, assigning team members, and monitoring project progress."
    },
    {
        name: "Bug Tracking System",
        description:
            "A system for tracking and managing software bugs, including features for bug reporting, assignment, and resolution."
    },
    {
        name: "Feature Request Tracker",
        description:
            "An application for collecting and prioritizing feature requests from users, allowing the development team to plan future releases."
    }
];

const Projects = () => {
    return (
        <MainLayout>
            {!projects ? (
                <DefaultPageWrapper
                    imagePath={image}
                    pageTitle="You don't have any projects yet!"
                    btnText="Add a Project"
                />
            ) : (
                "Hello"
            )}
        </MainLayout>
    );
};

export { Projects };
