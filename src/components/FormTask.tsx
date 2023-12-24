import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useTaskContext } from "@/contexts/TasksContext";
export interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}


const FormTask = () => {
  const {setTasks} =  useTaskContext();
  const [data, setData] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    isCompleted: false,
  });
  const [errors, setErrors] = useState({ title: "", description: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? !data.isCompleted : value;
    setData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  const handleError = (error: string | null, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!data.title) {
      handleError("Title is requires", "title");
      isValid = false;
    }

    if (!data.description) {
      handleError("Description is required", "description");
      isValid = false;
    }

    if (isValid) {
      setTasks((prevData) => [
        ...prevData,
        { ...data, id: prevData.length + 1 },
      ]);
      setData({
        id: 0,
        title: "",
        description: "",
        isCompleted: false,
      });
    }
  };

  return (
    <form className="w-1/4 space-y-5" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={data.title}
        onFocus={() => handleError(null, "title")}
        className=""
      />
      {errors.title && (
        <span className="text-sm text-destructive">{errors.title}</span>
      )}

      <Textarea
        placeholder="Type your message here."
        onFocus={() => handleError(null, "description")}
        onChange={handleChange}
        name="description"
        value={data.description}
      />
      {errors.description && (
        <span className="text-sm text-destructive">{errors.description}</span>
      )}
      <div className="flex items-center space-x-2">
        <input
          className="w-4 h-4"
          type="checkbox"
          id="isCompleted"
          onChange={handleChange}
          name="isCompleted"
          checked={data.isCompleted}
        />

        <label
          htmlFor="isCompleted"
          className="font-medium leading-none text-l peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Done
        </label>
      </div>
      <Button type="submit" className="w-full">
        Save
      </Button>
    </form>
  );
};

export default FormTask;
