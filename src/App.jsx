import { Routes, Route } from "react-router"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import NotFound from "./pages/NotFound"
import AddTaskModal from "./components/tasks/AddTaskModal"
import { useState } from "react"
import useTasks from "./hooks/useTasks"

const App = () => {
  const { tasks, setTasks, addTask } = useTasks();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard tasks={tasks} />} />
        <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
        <Route
          path="/dashboard/addTask"
          element={<AddTaskModal addTask={addTask} />}
        />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
