import React, { useState } from "react";
import MultiTabs from "../../components/MultiTabs";
import Users from "./UsersManage";
import { Navigate } from "react-router-dom";
import "./index.scss";
import Overview from "./Overview";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [logout, setLogout] = useState(false);

  const tabs = [
    { label: "Overview", id: "overview" },
    { label: "Users", id: "users" },
  ];

  const handleLogout = () => {
    setLogout(true);
    localStorage.clear();
  };

  return (
    <div className="dashboard">
      {logout && <Navigate to="/" replace={true} />}
      <div className="dashboard__header">
        <label>Dashboard</label>
        <label onClick={handleLogout}>Logout</label>
      </div>
      <MultiTabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === "users" && <Users />}
      {selectedTab === "overview" && <Overview />}
    </div>
  );
};

export default Dashboard;
