import { Task } from "./FormTask";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
  handleTaskUpdate: (index: number) => void;
};

const TasksList = ({ handleTaskUpdate, tasks }: Props) => {
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
