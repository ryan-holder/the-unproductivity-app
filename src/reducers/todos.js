function todos(state = [], action) {
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					index: action.index,
					content: action.todo,
					checked: action.checked,
				},
			];
		case "REMOVE_TODO":
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1),
			];
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.index === action.index ? { ...todo, checked: !todo.checked } : todo
			);
		default:
			return state;
	}
}

export default todos;
