import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark">
					<a href="#" className="navbar-brand">
						<i className={this.props.icon}></i>
						{this.props.title}
					</a>
				</nav>
			</div>
		);
	}
}

Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
