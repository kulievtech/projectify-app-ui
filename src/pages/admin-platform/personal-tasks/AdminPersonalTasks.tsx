import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Input,
    Modal,
    Typography,
    Button,
    DatePickerV1
} from "../../../design-system";
import { NoDataPlaceholder, TaskCard } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";
import {
    TaskCreateInput,
    adminPersonalTasks as adminPersonalTasksService
} from "../../../api";
import { useStore } from "../../../hooks";
import {
    Actions,
    AddTaskAction,
    ChangeTaskStatusAction,
    PopulateTasksAction
} from "../../../store";
import { groupTasksByStatus } from "../../../utils";
import { TaskStatus } from "../../../types";
import toast from "react-hot-toast";

enum StatusToTitle {
    TODO = "To Do",
    INPROGRESS = "In Progress",
    DONE = "Done"
}

enum StatusToColor {
    TODO = "var(--jaguar-500)",
    INPROGRESS = "var(--sunglow-700)",
    DONE = "var(--green-500)"
}

const PageBase = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
`;

const CreateProjectModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const PageContent = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const PageHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const PageTitle = styled(Typography)`
    margin-bottom: var(--space-36);
`;

const TasksColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-30);
    height: calc(100vh - 12.8rem);
`;

const TasksColumn = styled.div`
    padding: 2.2rem 1rem 1rem 1rem;
    background-color: var(--jaguar-25);
    border-radius: var(--border-radius-20);
    border: 0.15rem solid var(--jaguar-100);
`;

const TasksColumnTitle = styled(Typography)<{ color: string }>`
    margin-bottom: var(--space-16);
    color: ${(props) => props.color};
`;

const AdminPersonalTasks = () => {
    const [taskDue, setTaskDue] = useState<Date>();
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");
    const [isTasksFetching, setIsTasksFetching] = useState(true);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const {
        state: { adminPersonalTasks },
        dispatch
    } = useStore();

    const [showCreateTaskModal, setShowCreateTaskModal] =
        useState<boolean>(false);

    useEffect(() => {
        adminPersonalTasksService
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

    const createTask = () => {
        setIsFormSubmitting(true);
        const input: TaskCreateInput = {
            title: taskTitle,
            description: taskDescription,
            due: taskDue!
        };

        adminPersonalTasksService
            .createTask(input)
            .then((data) => {
                const action: AddTaskAction = {
                    type: Actions.ADD_TASK,
                    payload: data.data
                };
                dispatch(action);
                setIsFormSubmitting(false);
                closeCreateTaskModal();
                toast.success("Task has been successfully created!");
            })
            .catch((e) => {
                setIsFormSubmitting(false);
                const error = e as Error;
                toast.error(error.message);
            });
    };

    const closeCreateTaskModal = () => {
        setTaskTitle("");
        setTaskDescription("");
        setTaskDue(undefined);
        setShowCreateTaskModal(false);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, status: TaskStatus) => {
        const task = JSON.parse(e.dataTransfer.getData("application/json"));

        adminPersonalTasksService
            .updateTask(task.id, { status: status })
            .then((_) => {
                const action: ChangeTaskStatusAction = {
                    type: Actions.CHANGE_TASK_STATUS,
                    payload: {
                        id: task.id,
                        status: status
                    }
                };
                dispatch(action);
            })
            .catch((e) => {
                toast.error("Something went wrong! Try Later.");
            });
    };

    const groupedTasks = groupTasksByStatus(adminPersonalTasks);

    return (
        <PageBase>
            {!adminPersonalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any personal tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <PageContent>
                    <PageHeader>
                        <PageTitle variant="h6" weight="medium">
                            Personal Tasks
                        </PageTitle>
                        <Button
                            variant="contained"
                            color="primary"
                            size="md"
                            shape="rounded"
                            onClick={() => setShowCreateTaskModal(true)}
                        >
                            Create A Task
                        </Button>
                    </PageHeader>
                    <TasksColumns>
                        {Object.keys(groupedTasks).map((groupName) => {
                            return (
                                <TasksColumn
                                    key={groupName}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) =>
                                        onDrop(e, groupName as TaskStatus)
                                    }
                                >
                                    <TasksColumnTitle
                                        variant="paragraphSM"
                                        weight="semibold"
                                        color={
                                            StatusToColor[
                                                groupName as TaskStatus
                                            ]
                                        }
                                    >
                                        {StatusToTitle[groupName as TaskStatus]}{" "}
                                        <span>
                                            ({groupedTasks[groupName].length})
                                        </span>
                                    </TasksColumnTitle>

                                    {groupedTasks[groupName].map((task) => {
                                        return (
                                            <TaskCard
                                                key={task.id}
                                                task={task}
                                            />
                                        );
                                    })}
                                </TasksColumn>
                            );
                        })}
                    </TasksColumns>
                </PageContent>
            )}

            <Modal show={showCreateTaskModal} position="center">
                <CreateProjectModalTitle variant="paragraphLG" weight="medium">
                    New Task
                </CreateProjectModalTitle>
                <Inputs>
                    <Input
                        placeholder="Title"
                        value={taskTitle}
                        onChange={(value) => setTaskTitle(value)}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="textarea"
                        placeholder="Description"
                        value={taskDescription}
                        onChange={(value) => {
                            setTaskDescription(value);
                        }}
                        shape="rounded"
                        size="lg"
                    />
                    <DatePickerV1
                        inputSize="lg"
                        shape="rounded"
                        placeholder="Due Date"
                        selected={taskDue}
                        onChange={(date) => setTaskDue(date)}
                    />
                </Inputs>
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        variant="outlined"
                        fullWidth
                        onClick={closeCreateTaskModal}
                        disabled={isFormSubmitting}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="lg"
                        shape="rounded"
                        color="primary"
                        fullWidth
                        onClick={createTask}
                        disabled={isFormSubmitting}
                    >
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { AdminPersonalTasks };
