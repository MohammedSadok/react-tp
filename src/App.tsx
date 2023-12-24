import FormTask from "./components/FormTask";
import { Header } from "./components/Header";
import TasksList from "./components/TasksList";
import { TaskProvider } from "./contexts/TasksContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <TaskProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className="flex flex-col justify-between w-screen h-screen">
          <div className="flex items-center h-16 px-4 border-b">
            <Header className="mx-6" />
          </div>

          <div className="flex justify-around">
            <FormTask />
            <TasksList />
          </div>
          <footer className="py-5 font-thin text-center bg-gray-300 bg-dark dark:bg-white">
            <p className="text-xl font-semibold text-white dark:text-black">
              © 2023 Mohammed sadok project ✨✅
            </p>
          </footer>
        </main>
      </ThemeProvider>
    </TaskProvider>
  );
}

export default App;
