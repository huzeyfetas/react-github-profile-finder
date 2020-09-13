import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class User extends Component {
	//  github api -> https://api.github.com/users/USERNAME
	//  TODO  statei model şeklinde al
	constructor(props) {
		super(props);
		// this.state = {
		// 	id: 49512381,
		// 	login: "huzeyfetas",
		// 	name: "Hüzeyfe TAŞ",
		// 	url: "https://api.github.com/users/huzeyfetas",
		// 	html_url: "https://github.com/huzeyfetas",
		// 	avatar_url: "https://avatars0.githubusercontent.com/u/49512381?v=4",
		// 	followers_url: "https://api.github.com/users/huzeyfetas/followers",
		// 	following_url:
		// 		"https://api.github.com/users/huzeyfetas/following{/other_user}",
		// 	bio: "React & React Native Enthusiast \r\nhuzeyfetas@outlook.com",
		// 	public_repos: 9,
		// 	followers: 3,
		// 	following: 34,
		// };
	}
	render() {
		console.log(this.props.user);
		const { avatar_url, id, login, url } = this.props.user;
		return (
			<div className="col-md-4 col-sm-6 col-lg-3">
				<div className="card mb-3">
					<img src={avatar_url} alt="profil_resmi" className="img-fluid" />
					<div className="card-body">
						<h4>{login}</h4>
						<hr />
						<h6>ID: {id}</h6>
						<br />

						<Link to={`user/${login}`} className="btn btn-dark btn-sm mr-2">
							<i className={this.props.icon}></i>
							Go Details
						</Link>
						<a href={url} className="btn btn-warning btn-sm">
							Api Detay
						</a>
					</div>
				</div>
			</div>
		);
	}
}

User.defaultProps = {
	icon: "fab fa-github mr-2",
};

User.propTypes = {};

export default User;
