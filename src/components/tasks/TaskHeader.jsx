const TaskHeader = ({active}) =>{
    return(
        <div className="flex justify-between">
            <div>
                <h3 className="text-2xl font-black">
                    My Tasks
                </h3>
                <p className="text-gray-500">
                    Manage and track all your tasks.
                </p>
            </div>
            <div>
                <p className="border border-green-400 rounded-full bg-green-700 text-white px-3 py-1 text-sm">
                    {"2 Active" || active}
                </p>
            </div>
        </div>
    )
}

export default TaskHeader;