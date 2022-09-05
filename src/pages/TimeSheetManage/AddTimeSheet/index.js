import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { useDispatch } from "react-redux";
import "./index.scss";
import { addTimeSheet } from "../../../slices/timesheetSlice";

const AddTimeSheet = ({ isOpen, togglOpen, userId }) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

  const clearData = () => {
    setTask("");
    setEstimatedTime("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTimeSheet({
        id: +userId,
        data: { task, estimate: `${estimatedTime} Hrs` },
      })
    );
    clearData();
    togglOpen(false);
  };

  return (
    <Modal isOpen={isOpen} toggleOpen={togglOpen} label="Add Task">
      <form className="addUser__input-form" onSubmit={handleSubmit}>
        <div className="addUser__input-container">
          <label>Task</label>
          <input
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Enter the task"
            required
          />
        </div>
        <div className="addUser__input-container">
          <label>Estimated Time</label>
          <input
            value={estimatedTime}
            onChange={(event) => setEstimatedTime(event.target.value)}
            placeholder="Enter estimated time"
            type="number"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
};

export default AddTimeSheet;
