import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 111,
      password: "admin",
      type: "admin",
      name: "Admin",
      role: "Admin",
      age: 45,
    },
    {
      id: 222,
      password: "client",
      type: "client",
      name: "Arun",
      role: "developer",
      age: 23,
    },
    {
      id: 333,
      password: "client",
      type: "client",
      name: "Kiran",
      role: "developer",
      age: 28,
    },
  ],
  clientUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    getClientUsers(state, action) {
      state.clientUsers = state.users.filter((user) => user.type === "client");
    },
  },
});

export const { addUser, deleteUser, getClientUsers } = usersSlice.actions;

export default usersSlice.reducer;
