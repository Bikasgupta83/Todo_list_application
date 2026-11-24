import DashboardHeader from "../components/dashboard/DashboardHeader";
import RecentTasks from "../components/dashboard/RecentTasks";
import DashboardStats from "../components/dashboard/DashboardStats";

const Dashboard = ({tasks}) =>{
    return(
        <>
            <div className="flex justify-between p-2">
                <DashboardHeader />
            </div>
            <div className="cards py-5 flex justify-between">
                <DashboardStats tasks={tasks} />
            </div>
            <div>
                <RecentTasks tasks={tasks} />
            </div>
        </>
    )
}

export default Dashboard;