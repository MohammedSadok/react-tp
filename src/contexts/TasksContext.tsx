import { Task } from "@/components/FormTask";
import React, { ReactNode, createContext, useContext, useState } from "react";
import tasksData from "../data/tasks.json";

interface TaskContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleTaskUpdate: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const handleTaskUpdate = (id: number) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[id - 1].isCompleted = !newTasks[id - 1].isCompleted;
      return newTasks;
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleTaskUpdate }}>
      {children}
    </TaskContext.Provider>
  );
};
