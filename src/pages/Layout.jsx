import { Outlet, useLocation, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const asideBar = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
  ];

  return (
    <div className="flex min-h-screen">
      <nav className="fixed inset-y-0 left-0 flex w-64 flex-col border-r border-gray-300 bg-amber-50 p-4">
        <div className="mb-6 text-2xl font-bold">Logo</div>
        <ul className="space-y-2">
          {asideBar.map((item) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <li
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`cursor-pointer rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-amber-200/70 ${
                  isActive ? "bg-amber-300/70 font-medium text-gray-900" : ""
                }`}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="ml-64 flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
