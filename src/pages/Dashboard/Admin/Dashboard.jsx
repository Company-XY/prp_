import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <aside className="basis-1/4 flex flex-col space-y-4">
        <Link to="">Dashboard</Link>
        <Link to="roles">Roles</Link>
        <Link to="list">Lists</Link>
      </aside>
      <div className="basis-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
