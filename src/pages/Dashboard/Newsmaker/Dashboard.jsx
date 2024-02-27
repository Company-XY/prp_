import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="basis-1/4">
        <Sidebar columns={2} title="Sidebar 1" />
      </aside>
      <div className="basis-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
