import { useTaskContext } from "@/contexts/TasksContext";
import { TaskItem } from "./TaskItem";
import { ScrollArea } from "./ui/scroll-area";

const TasksList = () => {
  const { handleTaskUpdate, tasks } = useTaskContext();
  return (
    <ScrollArea className="border rounded-md max-h-[500px]">
      {tasks.map((task) => (
        <TaskItem
          id={task.id}
          handleChange={handleTaskUpdate}
          description={task.description}
          isCompleted={task.isCompleted}
          title={task.title}
        />
      ))}
    </ScrollArea>
  );
};

export default TasksList;
