import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router";

const AddTaskModal = ({ addTask }) => {
    const navigate = useNavigate();

    const [taskAdded, setTaskAdded] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: crypto.randomUUID(),
            ...formData,
            status: "Pending",
            createdAt: new Date().toISOString(),
        };

        addTask(newTask);
        setTaskAdded("New Task Added!");
        setFormData({
            title: "",
            description: "",
            dueDate: "",
            priority: "low",
        })
    };

    useEffect(() => {
        if (!taskAdded) return;

        const timerId = setTimeout(() => {
            setTaskAdded("")
        }, 2000);

        return () => clearTimeout(timerId);
    }, [taskAdded])

    return (
        <div>
            <div className="space-y-6">
                <div>
                    <button
                        onClick={() => navigate("/dashboard")}
                        type="button"
                        className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
                    >
                        <MdOutlineKeyboardArrowLeft className="h-5 w-5" />
                        Back
                    </button>
                </div>

                {taskAdded && (
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-medium text-green-700">
                        {taskAdded}
                    </div>
                )}

                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Create New Task
                    </h2>
                    <p className="text-sm text-gray-500">
                        Add a new task to your workspace.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="title"
                            className="text-sm font-medium text-gray-700"
                        >
                            Task Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Complete React Todo Project"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="description"
                            className="text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe what needs to be done..."
                            rows={3}
                            className="w-full resize-none rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="dueDate"
                                className="text-sm font-medium text-gray-700"
                            >
                                Due Date
                            </label>
                            <input
                                id="dueDate"
                                name="dueDate"
                                type="date"
                                value={formData.dueDate}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="priority"
                                className="text-sm font-medium text-gray-700"
                            >
                                Priority
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            >
                                <option value="high">High Priority</option>
                                <option value="medium">Medium Priority</option>
                                <option value="low">Low Priority</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
                        <button
                            onClick={() => navigate("/dashboard")}
                            type="button"
                            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                        >
                            <span className="text-base leading-none">+</span>
                            <span>Create Task</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
