const RecentTasks = ({ tasks = [] }) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 space-y-1 border-b border-gray-100 pb-4">
                <h1 className="text-lg font-bold text-gray-900">Recent Tasks</h1>
                <p className="text-sm text-gray-500">Your latest task activity</p>
            </div>

            <div className="space-y-3">
                {tasks.length > 0 ? (
                    tasks.slice(-3).map((task) => (
                        <div
                            key={task.id}
                            className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <span
                                        className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${task.status === "Completed"
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
                                        <p className="line-clamp-2 text-xs text-gray-500">
                                            {task.description.length > 40
                                                ? `${task.description.slice(0, 40)}...`
                                                : task.description
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="shrink-0">
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${task.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : task.status === "In Progress"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-amber-100 text-amber-700"
                                            }`}
                                    >
                                        {task.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="py-6 text-center text-sm text-gray-500">
                        No tasks available yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecentTasks;
