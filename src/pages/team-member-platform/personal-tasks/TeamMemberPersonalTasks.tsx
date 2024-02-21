import { useEffect, useState } from "react";
import styled from "styled-components";
import { NoDataPlaceholder, PageHeader } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";
import { teamMemberTasksService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../utils";
import { CreateTaskModal } from "./CreateTaskModel";
import { Kanban } from "./Kanban";

const TeamMemberPersonalTasks = () => {
    const [isTasksFetching, setIsTasksFetching] = useState(true);

    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    const {
        state: { teamMemberPersonalTasks },
        dispatch
    } = useStore();

    useEffect(() => {
        teamMemberTasksService
            .getTasks()
            .then((data) => {
                setIsTasksFetching(false);
                const action: PopulateTasksAction = {
                    type: Actions.POPULATE_TASKS,
                    payload: data.data.tasks
                };
                dispatch(action);
            })
            .catch((error) => {
                setIsTasksFetching(false);
                console.log(error);
            });
    }, []);

    if (isTasksFetching) {
        return null;
    }

    const groupedTasks = groupTasksByStatus(teamMemberPersonalTasks);

    return (
        <>
            {!teamMemberPersonalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Tasks"
                        actionButtonText="Create A Task"
                        actionButtonOnClick={() => setShowCreateTaskModal(true)}
                    />
                    <Kanban groupedTasks={groupedTasks} />
                </>
            )}
            <CreateTaskModal
                show={showCreateTaskModal}
                closeModal={() => setShowCreateTaskModal(false)}
            />
        </>
    );
};

export { TeamMemberPersonalTasks };
