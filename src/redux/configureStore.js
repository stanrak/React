import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { StaffsInDept } from "./staffsInDept";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsInDept: StaffsInDept
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};