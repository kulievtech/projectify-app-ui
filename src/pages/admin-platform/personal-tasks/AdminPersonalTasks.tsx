import { useEffect, useState } from "react";
import { NoDataPlaceholder, PageHeader } from "../../components";
import { adminTasksService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../utils";
import { CreateTaskModal } from "./CreateTaskModel";
import { Kanban } from "./Kanban";

import noTask from "../../../assets/illustrations/no-task.svg";

const AdminPersonalTasks = () => {
    const [isTasksFetching, setIsTasksFetching] = useState(true);

    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    const {
        state: { adminPersonalTasks },
        dispatch
    } = useStore();

    useEffect(() => {
        adminTasksService
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

    const groupedTasks = groupTasksByStatus(adminPersonalTasks);

    return (
        <>
            {!adminPersonalTasks.length ? (
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

export { AdminPersonalTasks };
