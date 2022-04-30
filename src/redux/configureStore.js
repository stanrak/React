import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";
import {
  createStore
} from 'redux';
import { formStaff } from "./staffForm";

const store = createStore(combineReducers({
  ...Reducer,
  ...formStaff,
}));

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};