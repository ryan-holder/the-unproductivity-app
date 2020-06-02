import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = {
	todos: [
		{ index: 1, content: "These are provided here", checked: false },
		{ index: 2, content: "So that there's something to read", checked: false },
		{ index: 3, content: "So that it doesn't look shit", checked: false },
		{ index: 4, content: "So that we can figure out how", checked: false },
		{ index: 5, content: "We can actually add them ourselves", checked: false },
		{ index: 6, content: "Until then...", checked: false },
	],
	canvas: { size: 60, hex: "#BADA55", hue: false },
	memos: { isBlocked: false, isRecording: false, recordings: [] },
};

const store = createStore(
	rootReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
