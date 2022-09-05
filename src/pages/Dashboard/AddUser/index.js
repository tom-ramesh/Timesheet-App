import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { addUser } from "../../../slices/usersSlice";
import "./index.scss";

const AddUser = ({ isOpen, toggleOpen }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    age: 0,
    password: "",
    type: "client",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const { users } = useSelector((state) => state.usersReducer);

  const handleinputChange = (key, event) => {
    setUserData({ ...userData, [key]: event.target.value });
  };

  const clearData = () => {
    setUserData({
      name: "",
      role: "",
      age: 0,
      password: "",
      type: "client",
    });
    setConfirmPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUserId = Math.max(...users.map((user) => user.id)) + 1;

    if (userData.password === confirmPassword) {
      dispatch(addUser({ ...userData, id: newUserId }));
      clearData();
      toggleOpen(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen} label="Create User">
      <form onSubmit={handleSubmit} className="addUser__input-form">
        <div className="addUser__input-container">
          <label>Name</label>
          <input
            value={userData.name}
            onChange={(event) => handleinputChange("name", event)}
            required
          />
        </div>
        <div className="addUser__input-container">
          <label>Role</label>
          <input
            value={userData.role}
            onChange={(event) => handleinputChange("role", event)}
            required
          />
        </div>
        <div className="addUser__input-container">
          <label>Age</label>
          <input
            value={userData.age}
            onChange={(event) => handleinputChange("age", event)}
            type="number"
            required
          />
        </div>
        <div className="addUser__radio-container">
          <div onClick={() => setUserData({ ...userData, type: "admin" })}>
            <label>Admin</label>
            <input type="radio" checked={userData.type === "admin"} readOnly />
          </div>
          <div onClick={() => setUserData({ ...userData, type: "client" })}>
            <label>Client</label>
            <input type="radio" checked={userData.type === "client"} readOnly />
          </div>
        </div>
        <div className="addUser__input-container">
          <label>Password</label>
          <input
            value={userData.password}
            onChange={(event) => handleinputChange("password", event)}
            type="password"
            required
          />
        </div>
        <div className="addUser__input-container">
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </Modal>
  );
};

export default AddUser;
