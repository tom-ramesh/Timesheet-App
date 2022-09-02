import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeSheetTable from "../../../components/TimeSheetTable";
import { getUserTimeSheet } from "../../../slices/timesheetSlice";
import { getClientUsers } from "../../../slices/usersSlice";
import "./index.scss";

const Overview = () => {
  const dispatch = useDispatch();

  const { userTimeSheet = [] } = useSelector((state) => state.timeSheetReducer);
  const { clientUsers = [] } = useSelector((state) => state.usersReducer);

  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    dispatch(getClientUsers());
  }, []);

  useEffect(() => {
    dispatch(getUserTimeSheet(selectedUser || clientUsers[0]?.id));
  }, [selectedUser, clientUsers]);

  return (
    <div className="overview">
      <div className="overview__select">
        <select onChange={(event) => setSelectedUser(event.target.value)}>
          {clientUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <TimeSheetTable taskData={userTimeSheet} />
    </div>
  );
};

export default Overview;
