import TaskList from "../components/TaskList";
import TaskProvider from "../contexts/TaskProvider";

export default {
    title: "Component/TaskList",
    component: TaskList,
};

export const Default = () => {
    const task = [
        {
            id: "123",
            content: "Todo",
            complete: false,
        },
        {
            id: "23",
            content: "Hello",
            complete: true,
        },
        {
            id: "13",
            content: "sleep",
            complete: false,
        },
    ];

    return (
        <TaskProvider initialTasks={[...task]}>
            <TaskList />
        </TaskProvider>
    );
};
