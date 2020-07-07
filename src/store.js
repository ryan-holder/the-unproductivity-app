import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {
	todos: [
		{ index: 0, content: "Add a todo", checked: false },
		{ index: 1, content: "Check a todo", checked: false },
		{ index: 2, content: "Delete a todo", checked: false },
		{
			index: 3,
			content: "Go to canvas 'cos it's cooler",
			checked: false,
		},
	],
	canvas: { size: 60, hex: "#000000", hue: false },
	memos: { blocked: false, recording: false, recordings: [] },
};

const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
