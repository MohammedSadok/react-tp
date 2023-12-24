import { useTaskContext } from "@/contexts/TasksContext";
import { TaskItem } from "./TaskItem";

const TasksList = () => {
  const { handleTaskUpdate, tasks } = useTaskContext();
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          id={task.id}
          handleChange={handleTaskUpdate}
          description={task.description}
          isCompleted={task.isCompleted}
          title={task.title}
        />
      ))}
    </div>
  );
};

export default TasksList;
