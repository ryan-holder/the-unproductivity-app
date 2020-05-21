import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {
	todos: [{ index: 1, content: "These are provided here" }],
	memos: [{ index: 1, content: "coming soon" }],
};

const store = createStore(rootReducer, initialState);

export default store;
