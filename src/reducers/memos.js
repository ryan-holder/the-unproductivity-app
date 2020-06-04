function memos(state = [], action) {
	switch (action.type) {
		case "IS_BLOCKED":
			return Object.assign({}, state, { blocked: action.status });
		case "IS_RECORDING":
			return Object.assign({}, state, { recording: action.status });
		case "SAVE_MEMO":
			return {
				...state,
				recordings: [
					...state.recordings,
					{ audio: action.audio, index: action.index },
				],
			};
		case "REMOVE_MEMO":
			return {
				...state,
				recordings: [
					...state.recordings.slice(0, action.index),
					...state.recordings.slice(action.index + 1),
				],
			};
		default:
			return state;
	}
}

export default memos;
