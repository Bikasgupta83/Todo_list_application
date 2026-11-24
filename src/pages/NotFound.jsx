import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="border border-gray-300 p-6 flex flex-col items-center gap-4 mt-50 max-w-md mx-auto rounded">
      <h1 className="font-bold text-red-500 text-2xl">Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Go back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
