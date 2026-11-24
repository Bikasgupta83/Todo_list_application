import { useNavigate } from "react-router";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="space-y-1">
        <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
          Welcome back, <span className="text-blue-600">Bikas!</span>
        </h3>
        <p className="text-sm text-gray-500">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="ml-auto flex flex-wrap items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => navigate("/dashboard/addTask")}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
        >
          <span className="text-base font-bold leading-none">+</span>
          <span>New Task</span>
        </button>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          <span className="text-base font-bold leading-none">+</span>
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
