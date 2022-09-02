import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../slices/usersSlice";
import AddUser from "../AddUser";
import "./index.scss";

const Users = () => {
  const dispatch = useDispatch();
  const [isModalOpen, toggleModal] = useState(false);
  const { users } = useSelector((state) => state.usersReducer);

  const allClientUsers = users.filter((user) => user.type === "client");

  const handleRemove = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="usersManage">
      <AddUser isOpen={isModalOpen} toggleOpen={toggleModal} />
      <div className="usersManage__top-container">
        <label>Users</label>
        <button onClick={() => toggleModal(true)}>Add</button>
      </div>
      <div className="usersManage__table">
        <div className="usersManage__header-container">
          <span>Name</span>
          <span>Role</span>
          <span>Age</span>
        </div>
        {allClientUsers.map(({ name, role, age, id }) => (
          <div key={name} className="usersManage__data-container">
            <span>{name}</span>
            <span>{role}</span>
            <span>{age}</span>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
