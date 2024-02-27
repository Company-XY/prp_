import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="basis-1/5 flex flex-col space-y-4 bg-pink flex-1">
        <Link to="">Dashboard</Link>
        <Link to="outreach">Outreach</Link>
        <Link to="press">Press Release</Link>
      </aside>
      <div className="basis-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
