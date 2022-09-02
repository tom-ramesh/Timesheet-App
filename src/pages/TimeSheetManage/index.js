import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import TimeSheetTable from "../../components/TimeSheetTable";
import { getUserTimeSheet } from "../../slices/timesheetSlice";
import AddTimeSheet from "./AddTimeSheet";
import "./index.scss";

const TimeSheetManage = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  const [isModalOpen, toggleOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    dispatch(getUserTimeSheet(userId));
  }, [userId, dispatch, isModalOpen]);

  const { userTimeSheet = [] } = useSelector((state) => state.timeSheetReducer);

  const handleLogout = () => {
    setIsLogout(true);
    localStorage.clear();
  };

  return (
    <div className="timeSheetManage">
      {isLogout && <Navigate to="/" replace={true} />}

      <AddTimeSheet
        isOpen={isModalOpen}
        togglOpen={toggleOpen}
        userId={userId}
      />
      <div className="timeSheetManage__header-container">
        <div className="usersManage__top-container">
          <label>Time Sheet</label>
          <button onClick={() => toggleOpen(true)}>Add</button>
        </div>
        <label onClick={handleLogout}>Logout</label>
      </div>
      <TimeSheetTable taskData={userTimeSheet} />
    </div>
  );
};

export default TimeSheetManage;
