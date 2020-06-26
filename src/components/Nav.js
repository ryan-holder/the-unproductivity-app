import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<Link to="/the-unproductivity-app">
				<img
					src="https://image.flaticon.com/icons/svg/319/319147.svg"
					alt="black square"
				/>
			</Link>
			<ul>
				<li>
					<NavLink to="/the-unproductivity-app/todos">to-do list</NavLink>
				</li>
				<li>
					<NavLink to="/the-unproductivity-app/canvas">canvas</NavLink>
				</li>
				<li>
					<NavLink to="/the-unproductivity-app/memos">memos</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
