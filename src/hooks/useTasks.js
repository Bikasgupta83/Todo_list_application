import { useEffect, useState } from "react";
import { getTasks, saveTasks } from "../utils/taskStorage";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => getTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return {
    tasks,
    setTasks,
    addTask,
  };
};

export default useTasks;