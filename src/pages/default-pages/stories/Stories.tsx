import { DefaultPageWrapper, MainLayout } from "../../components";
import image from "../../../assets/images/stories.svg";
import styled from "styled-components";

const stories = [
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

const Stories = () => {
    return (
        <>
            {stories ? (
                <MainLayout>
                    <DefaultPageWrapper
                        imagePath={image}
                        pageTitle="You don't have any stories yet!"
                        btnText="Add a Story"
                    />
                </MainLayout>
            ) : (
                "Hello"
            )}
        </>
    );
};

export { Stories };
