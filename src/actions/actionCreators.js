function addTodo(index, content) {
	return {
		type: "ADD_TODO",
		index,
		content,
	};
}

function removeTodo(index) {
	return {
		type: "REMOVE_COMMENT",
		index,
	};
}
