import { useState } from "react";

const TaskFilters = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Pending", "Completed", "In Progress", "Today"];

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        if (onFilterChange) {
            onFilterChange(filter);
        }
    };

    return (
        <div className="py-2">
            <div className="flex flex-wrap items-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => handleFilterClick(filter)}
                        className={`cursor-pointer rounded-full px-3 py-1 text-sm transition-colors ${
                            activeFilter === filter
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "bg-gray-300 text-gray-700 hover:bg-gray-250"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TaskFilters;