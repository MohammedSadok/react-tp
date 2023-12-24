import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  handleChange: (index: number) => void;
}
export function TaskItem({
  id,
  description,
  isCompleted,
  title,
  handleChange,
}: Task) {
  const handleTaskChange = () => {
    handleChange(id);
  };

  return (
    <div className="flex items-center gap-6 p-4 border-2 rounded-sm">
      <Checkbox
        id="terms"
        onCheckedChange={handleTaskChange}
        checked={isCompleted}
        className="w-6 h-6"
      />
      <div className="flex flex-col items-start justify-between gap-2">
        <p className={cn("font-bold", isCompleted && "line-through")}>
          {title}
        </p>
        <p className="font-semibold ">{description}</p>
      </div>
    </div>
  );
}
