import React from "react";
import "./index.scss";

const TimeSheetTable = ({ taskData = [] }) => {
  return (
    <div className="timeSheetTable__table">
      <div className="timeSheetTable__table-header">
        <label>Task</label>
        <label>Estimate</label>
      </div>
      {taskData.map(({ task, estimate }, index) => (
        <div key={index} className="timeSheetTable__table-row">
          <label>{task}</label>
          <label>{estimate}</label>
        </div>
      ))}
    </div>
  );
};

export default TimeSheetTable;
