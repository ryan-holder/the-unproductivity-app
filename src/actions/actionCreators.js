// TODOS ACTIONS

export function addTodo(index, todo, checked) {
	return {
		type: "ADD_TODO",
		index,
		todo,
		checked,
	};
}

export function removeTodo(index) {
	return {
		type: "REMOVE_TODO",
		index,
	};
}

export function toggleTodo(index) {
	return {
		type: "TOGGLE_TODO",
		index,
	};
}

// CANVAS ACTIONS

export function changeColour(hex) {
	return {
		type: "CHANGE_COLOUR",
		hex,
	};
}

export function changeSize(size) {
	return {
		type: "CHANGE_SIZE",
		size,
	};
}

export function changeHue(hue) {
	return {
		type: "CHANGE_HUE",
		hue,
	};
}

// MEMO ACTIONS

export function isBlocked(status) {
	return {
		type: "IS_BLOCKED",
		status,
	};
}

export function isRecording(status) {
	return {
		type: "IS_RECORDING",
		status,
	};
}

export function saveMemo(audio, index) {
	return {
		type: "SAVE_MEMO",
		audio,
		index,
	};
}

export function removeMemo(index) {
	return {
		type: "REMOVE_MEMO",
		index,
	};
}
