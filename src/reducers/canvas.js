function canvas(state = [], action) {
	switch (action.type) {
		case "CHANGE_COLOUR":
			return Object.assign({}, state, { hex: action.hex });
		case "CHANGE_SIZE":
			return Object.assign({}, state, { size: action.size });
		case "CHANGE_HUE":
			return Object.assign({}, state, { hue: action.hue });
		default:
			return state;
	}
}

export default canvas;
