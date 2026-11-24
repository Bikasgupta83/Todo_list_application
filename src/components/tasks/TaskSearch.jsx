import { CiSearch } from 'react-icons/ci';
import TaskFilters from './TaskFilters';
import { useState } from 'react';

const TaskSearch = ({ tasks = [], searchTask, onFilterChange }) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        searchTask(searchValue);
    };

    return (
        <div className="w-full">
            <div className='flex justify-between'>
                <h3 className='font-bold'>All Tasks</h3>
                <p className='bg-gray-300 rounded-full px-3 py-1 text-sm'>
                    {`${tasks.length} Tasks`}
                </p>
            </div>
            <div>
                <TaskFilters
                    onFilterChange={onFilterChange}
                />
            </div>
            <div className="relative flex items-center">
                <CiSearch
                    className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none"
                />
                <input
                    type="text"
                    value={search}
                    placeholder="Search Tasks..."
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default TaskSearch;
