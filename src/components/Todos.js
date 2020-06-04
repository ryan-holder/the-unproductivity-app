import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

// when deleting checked item, the below item will take on checked style but not status

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
		const index = this.props.todos.length;
		const todo = this.inputRef.current.value;
		const checked = false;
		this.props.addTodo(index, todo, checked);
		e.target.reset();
	};

	renderTodos = (todo, index) => {
		return (
			<div
				className={
					this.props.todos[index].checked ? "item item-active" : "item"
				}
				key={index}
				index={index}
				ref={this.todoRef}
			>
				<input
					type="checkbox"
					onClick={(e) => {
						this.props.toggleTodo(this.props.todos[index].index); // this makes toggling todos work when items have been deleted
					}}
				/>
				<p>{todo.content}</p>
				<button index={index} onClick={() => this.props.removeTodo(index)}>
					&times;
				</button>
			</div>
		);
	};

	render() {
		return (
			<div className="todos-landing">
				<form className="add-todo" onSubmit={this.handleSubmit}>
					<input ref={this.inputRef} type="text" />
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
