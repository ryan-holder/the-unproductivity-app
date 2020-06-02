import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

function mapStateToProps(state) {
	return {
		todos: state.todos,
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
		this.handleSubmit = this.handleSubmit.bind(this);
		/*this.addCheck = this.addCheck.bind(this);*/
	}

	handleSubmit(e) {
		e.preventDefault();
		const index = this.props.todos.length + 1;
		const todo = this.inputRef.current.value;
		const checked = false;
		this.props.addTodo(index, todo, checked);
		e.target.reset();
	}

	/*lastChecked;

	addCheck(e, index) {
		e.persist();
		let inBetween = false;
		// only fire if shiftkey down and checked is true
		if (e.shiftKey && e.target.checked) {
			// looping over each checkbox to check if 'inBetween'
			this.props.todos.forEach((checkbox) => {
				if (
					checkbox === this.props.todos[index] ||
					checkbox === this.lastChecked
				) {
					inBetween = !inBetween;
				}
				if (inBetween) {
					console.log(inBetween);
				}
			});
		}
		this.lastChecked = this.props.todos[index];
	}*/

	render() {
		return (
			<div className="todos-landing">
				<form className="add-todo" onSubmit={this.handleSubmit}>
					<input ref={this.inputRef} type="text" />
					<input type="submit" className="add-todo-button" />
				</form>
				<div className="todos">
					{this.props.todos.map((todo, index) => (
						<div className="item" key={index} index={index} ref={this.todoRef}>
							<input
								type="checkbox"
								onClick={(e) => {
									/*this.addCheck(e, index);*/
									this.props.toggleTodo(index);
								}}
							/>
							<p>{todo.content}</p>
							<button
								index={index}
								onClick={() => this.props.removeTodo(index)}
							>
								x
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
