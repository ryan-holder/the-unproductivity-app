import { combineReducers } from "redux";
import todos from "./todos";
import memos from "./memos";

const rootReducer = combineReducers({ todos, memos });

export default rootReducer;
