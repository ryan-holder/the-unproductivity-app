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

const Todos = ({ todos }) => {
	return (
		<div className="todos-landing">
			<div className="add-todo">
				<input type="text" />
				<button className="add-todo-button">Add To-do</button>
			</div>
			<div className="todos">
				{todos.map((todo, index) => (
					<div className="item" key={index}>
						<input type="checkbox" />
						<p>{todo.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
