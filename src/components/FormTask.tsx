import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
export interface Task {
  title: string;
  description: string;
  isCompleted: boolean;
}
type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const FormTask = ({ setTasks }: Props) => {
  const [data, setData] = useState<Task>({
    title: "",
    description: "",
    isCompleted: false,
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((prevData) => [...prevData, data]);
  };

  return (
    <form className="w-64 space-y-3" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
        value={data.title}
      />

      <Textarea
        placeholder="Type your message here."
        onChange={handleChange}
        name="description"
        value={data.description}
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          onChange={handleChange}
          name="isCompleted"
          checked={data.isCompleted}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Done
        </label>
      </div>
      <Button type="submit" className="float-left">
        Save
      </Button>
    </form>
  );
};

export default FormTask;
