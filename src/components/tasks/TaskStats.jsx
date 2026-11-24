import { LuCalendar, LuCheck, LuClock1, LuListTodo } from "react-icons/lu";
import Card from "../cards/Card";
import { useState } from "react";

const TaskStats = ({tasks = []}) => {
    const totalCount = tasks.length;
    const completedCount = tasks.filter((task)=> task.status === "Completed").length;
    const pendingCount = tasks.filter((task)=> task.status === "Pending").length;
    const inProgressCount = tasks.filter((task)=> task.status === "In Progress").length;
    
    
    return (
        <>
            <Card text={"Total Tasks"} syncNumber={totalCount} icon={<LuListTodo />} subSyncText={"All created tasks"}/>
            <Card text={"Completed"} syncNumber={completedCount || 0} icon={<LuCheck />} subSyncText={"Successfully finished"} />
            <Card text={"Pending"} syncNumber={pendingCount || 0} icon={<LuCalendar />} subSyncText={"Not started yet"} />
            <Card text={"In Progress"} syncNumber={inProgressCount || 0} icon={<LuClock1 />} subSyncText={"Currently working"} />
        </>
    )
}
export default TaskStats;