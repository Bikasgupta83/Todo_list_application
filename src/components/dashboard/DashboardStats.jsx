import { FaArrowTrendUp, FaClock } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { LuListTodo } from "react-icons/lu";
import Card from '../cards/Card'

const DashboardStats = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completionTasks = tasks.filter((item) => item.status === "Completed").length;
    const avgSyncRate = totalTasks > 0 ? Math.floor((completionTasks / totalTasks) * 100) : 0

    const todayStr = new Date().toLocaleDateString('en-CA');

    const dueDateCount = tasks.filter((item) => {
        const itemDateStr = new Date(item.dueDate).toLocaleDateString('en-CA');
        return itemDateStr === todayStr;
    }).length;


    return (
        <>
            <Card text={"Total Task"} icon={<LuListTodo />} syncNumber={totalTasks || 0} subSyncText={`${completionTasks} Completed`} />
            <Card text={"Active Projects"} icon={<FiUser />} syncNumber={1} subSyncText={"Across all workspaces"} />
            <Card text={"Completion Rate"} icon={<FaArrowTrendUp />} syncNumber={`${avgSyncRate}%` || "0%"} subSyncText={"Sync Rate"} />
            <Card text={"Due Today"} icon={<FaClock />} syncNumber={dueDateCount || 0} subSyncText={"Tasks need attentions"} />
        </>
    )
}

export default DashboardStats;