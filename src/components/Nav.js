import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className="nav">
			<Link to="/"><img src="/images/book.jpg" alt="logo" /></Link>
			<ul>
				<li><Link to="/todos">to-do list</Link></li>
				<li><Link to="/canvas">canvas</Link></li>
				<li><Link to="/memos">memos</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;