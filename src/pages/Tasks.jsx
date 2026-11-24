import { useState } from "react";
import TaskHeader from "../components/tasks/TaskHeader";
import TaskList from "../components/tasks/TaskList";
import TaskSearch from "../components/tasks/TaskSearch";
import TaskStats from "../components/tasks/TaskStats";

const Tasks = ({ tasks, setTasks }) => {
    const [search, setSearch] = useState("");
    const [filterTask, setFilterTask] = useState("All");

    const todayStr = new Date().toLocaleDateString("en-CA");

    const filteredTasks = tasks.filter((item) => {
        if (filterTask === "All") return true;

        if (filterTask === "Today") {
            if (!item.dueDate) return false;
            const itemDateStr = new Date(item.dueDate).toLocaleDateString("en-CA");
            return itemDateStr === todayStr;
        }

        return item.status === filterTask;
    });

    return (
        <div>
            <div className="border-gray-200 p-2 rounded">
                <TaskHeader />
            </div>
            <div className="flex justify-between p-2">
                <TaskStats tasks={tasks} />
            </div>
            <div className="space-y-2">
                <TaskSearch 
                    tasks={tasks} 
                    searchTask={setSearch} 
                    onFilterChange={setFilterTask} 
                />
                <TaskList 
                    tasks={filteredTasks} 
                    setTasks={setTasks} 
                    search={search} 
                />
            </div>
        </div>
    );
};

export default Tasks;