import toast from "react-hot-toast";
import { teamMemberTasksService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, RemoveTaskAction } from "../../../store";
import { ConfirmationModal } from "../../components";

type DeleteTaskModalProps = {
    show: boolean;
    taskId: string;
    closeModal: () => void;
};

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
    show,
    closeModal,
    taskId
}) => {
    const { dispatch } = useStore();
    const deleteTask = () => {
        teamMemberTasksService
            .deleteTask(taskId)
            .then((_) => {
                const action: RemoveTaskAction = {
                    type: Actions.REMOVE_TASK,
                    payload: { id: taskId }
                };
                dispatch(action);
                closeModal();
                toast.success("Task has been successfully deleted!");
            })
            .catch((e) => {
                const error = e as Error;
                toast.error(error.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to delete the task?"
            show={show}
            cancel={closeModal}
            onConfirm={deleteTask}
        />
    );
};

export { DeleteTaskModal };
