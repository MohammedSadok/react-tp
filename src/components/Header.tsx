import { FileCheck2 } from "lucide-react";
import { cn } from "../lib/utils";
import { ModeToggle } from "./ModeToggle";

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 justify-between w-screen",
        className
      )}
      {...props}
    >
      <h1 className="flex items-center justify-center gap-4 text-2xl font-bold">
        Todo App
        <FileCheck2 size={30} strokeWidth={2.5} className="mt-1" />
      </h1>

      <div className="self-end">
        <ModeToggle />
      </div>
    </nav>
  );
}
