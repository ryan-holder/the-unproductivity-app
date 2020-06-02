import { combineReducers } from "redux";
import todos from "./todos";
import memos from "./memos";
import canvas from "./canvas";

const rootReducer = combineReducers({ todos, memos, canvas });

export default rootReducer;
