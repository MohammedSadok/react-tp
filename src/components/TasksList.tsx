import { TaskItem } from "./TaskItem";
interface Task {
  title: string;
  description: string;
  isCompleted: boolean;
}
type Props = {
  tasks: Task[];
  handleTaskUpdate: (index: number) => void;
};

const TasksList = ({ handleTaskUpdate, tasks }: Props) => {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          index={index}
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
