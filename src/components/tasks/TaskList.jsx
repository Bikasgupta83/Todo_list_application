import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { LuCalendar } from "react-icons/lu";

const TaskList = ({ tasks = [], setTasks, search = "" }) => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const dotsFunctionalList = ["Pending", "In Progress", "Completed", "Delete"];

    let taskItems = tasks;

    if (search !== "") {
        const searchText = search.toLowerCase();

        taskItems = taskItems.filter((task) => {
            const titleMatch = task.title.toLowerCase().includes(searchText);
            return titleMatch;
        });
    }

    const handleMenuAction = (id, actionClicked) => {
        let updatedTasks;

        if (actionClicked === "Delete") {
            updatedTasks = tasks.filter((task) => task.id !== id);
        } else {
            updatedTasks = tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, status: actionClicked };
                }
                return task;
            });
        }

        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setOpenMenuId(null);
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 border-b border-gray-100 pb-3">
                <h2 className="text-lg font-bold text-gray-900">Task List</h2>
            </div>

            <div className="space-y-3">
                {taskItems.length > 0 ? (
                    taskItems.map((task) => (
                        <div
                            key={task.id}
                            className="space-y-3 rounded-lg border border-gray-200 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <span
                                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                                            task.status === "Completed"
                                                ? "bg-green-500"
                                                : task.status === "In Progress"
                                                ? "bg-blue-500"
                                                : "bg-amber-500"
                                        }`}
                                    />
                                    <div className="space-y-1">
                                        <h2 className="text-sm font-semibold text-gray-900">
                                            {task.title}
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            {task.description?.length > 100
                                                ? `${task.description.slice(0, 200)}...`
                                                : task.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                            task.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : task.status === "In Progress"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-amber-100 text-amber-700"
                                        }`}
                                    >
                                        {task.status}
                                    </span>

                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenMenuId(openMenuId === task.id ? null : task.id)
                                            }
                                            className="cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-200/70 hover:text-gray-800"
                                        >
                                            <HiDotsVertical className="h-4 w-4" />
                                        </button>

                                        {openMenuId === task.id && (
                                            <div className="absolute right-0 z-10 mt-1 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                {dotsFunctionalList.map((item) => (
                                                    <button
                                                        key={item}
                                                        type="button"
                                                        onClick={() => handleMenuAction(task.id, item)}
                                                        className={`block w-full cursor-pointer px-3.5 py-1.5 text-left text-xs font-medium transition-colors ${
                                                            item === "Delete"
                                                                ? "text-red-600 hover:bg-red-50"
                                                                : task.status === item
                                                                ? "bg-blue-50 text-blue-600"
                                                                : "text-gray-700 hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 pl-5.5">
                                <div>
                                    <h3 className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                        <LuCalendar className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                                        <span>{task.dueDate}</span>
                                    </h3>
                                </div>
                                <div>
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                            task.priority === "high"
                                                ? "bg-red-100 text-red-700"
                                                : task.priority === "medium"
                                                ? "bg-amber-100 text-amber-800"
                                                : "bg-gray-200 text-gray-700"
                                        }`}
                                    >
                                        {task.priority
                                            ? `${task.priority.charAt(0).toUpperCase()}${task.priority.slice(1)} Priority`
                                            : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="py-6 text-center text-sm text-gray-500">
                        {typeof search === "string" && search.trim()
                            ? `No tasks found matching "${search}".`
                            : "No tasks available yet."}
                    </p>
                )}
            </div>
        </div>
    );
};

export default TaskList;