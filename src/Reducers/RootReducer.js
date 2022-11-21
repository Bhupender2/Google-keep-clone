import AddReducer from "./AddReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  AddReducer,
});

export default RootReducer;
