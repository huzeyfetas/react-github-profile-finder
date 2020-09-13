import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark navbar-expand-sm">
					<div className="container">
						<Link to="/" className="navbar-brand">
							<i className={this.props.icon}></i>
							{this.props.title}
						</Link>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link " to="about">
										About
									</Link>
								</li>
							</ul>
						</div>
					</div>
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
