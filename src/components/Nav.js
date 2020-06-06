import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/todos">to-do list</NavLink>
				</li>
				<li>
					<NavLink to="/canvas">canvas</NavLink>
				</li>
				<li>
					<NavLink to="/memos">memos</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
