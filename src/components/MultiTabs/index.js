import React from "react";
import "./index.scss";

const MultiTabs = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="multiTabs">
      {tabs.map(({ label, id }) => (
        <div
          key={id}
          className={
            selectedTab === id ? "multiTabs--selected" : "multiTabs__tab"
          }
          onClick={() => setSelectedTab(id)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default MultiTabs;
