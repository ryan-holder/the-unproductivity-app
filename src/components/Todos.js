import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

function mapStateToProps(state) {
	return {
		todos: state.todos,
		canvas: state.canvas,
		memos: state.memos,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class Todos extends React.Component {
	constructor() {
		super();
		this.inputRef = React.createRef();
		this.todoRef = React.createRef();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.inputRef.current.value === "") return;
		const index =
			this.props.todos.length > 0
				? this.props.todos[this.props.todos.length - 1].index + 1 // need to explain what this is
				: 0;
		const todo = this.inputRef.current.value;
		const checked = false;
		this.props.addTodo(index, todo, checked);
		e.target.reset();
	};

	renderTodos = (todo, listIndex) => {
		return (
			<div
				className={todo.checked ? "item item-active" : "item"}
				key={todo.index}
				index={todo.index}
				ref={this.todoRef}
			>
				<input
					type="checkbox"
					onClick={(e) => {
						this.props.toggleTodo(todo.index);
					}}
				/>
				<p>{todo.content}</p>
				<button onClick={() => this.props.removeTodo(listIndex)}>
					&times;
				</button>
			</div>
		);
	};

	render() {
		return (
			<div className="todos-landing">
				<form className="add-todo" onSubmit={this.handleSubmit}>
					<input
						ref={this.inputRef}
						type="text"
						placeholder="Add your todos here"
					/>
					<input type="submit" className="add-todo-button" />
				</form>
				{this.props.todos.length === 0 ? (
					<p className="no-todos">You have nothing to-do</p>
				) : (
					<div className="todos">{this.props.todos.map(this.renderTodos)}</div>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
