import { useState } from "react";
import "./App.css";
import FormTask, { Task } from "./components/FormTask";
import TasksList from "./components/TasksList";
import tasksData from "./data/tasks.json";

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const handleTaskUpdate = (index: number) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      return newTasks;
    });
  };

  return (
    <div className="flex justify-between">
      <FormTask setTasks={setTasks} />
      <TasksList handleTaskUpdate={handleTaskUpdate} tasks={tasks} />
    </div>
  );
}

export default App;
