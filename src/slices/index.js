import { combineReducers } from "redux";
import usersSlice from "./usersSlice";
import timesheetSlice from "./timesheetSlice";

export const rootReducer = combineReducers({
  usersReducer: usersSlice,
  timeSheetReducer: timesheetSlice,
});
