import React, { Component } from "react";
import Loading from "./Loading";
import Repos from "./Repos";

export class UserDetail extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
		// console.log(this.props);
	}

	render() {
		const { loading, repos } = this.props;

		const {
			id,
			login,
			name,
			url,
			html_url,
			avatar_url,
			followers_url,
			following_url,
			bio,
			public_repos,
			followers,
			following,
			location,
			company,
			email,
			blog,
		} = this.props.user;

		if (loading) {
			return <Loading />;
		}
		return (
			<div className="container my-3">
				<div className="row">
					<div className="col-md-3">
						<div className="card">
							<img src={avatar_url} alt="avatar_url" className="card-img-top" />
							<div className="card-body">
								<p className="card-text">{name}</p>
								<p>
									<i className="fas fa-map-marker-alt"></i>
									{location ? location : " Location is not yet defined"}
								</p>
								<p>
									<a
										href={html_url}
										className="btn btn-block btn-sm btn-primary"
									>
										Go Github Profile
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="card">
							<div className="card-body">
								{bio && (
									<React.Fragment>
										<h3>About</h3>
										<p>{bio}</p>{" "}
									</React.Fragment>
								)}
								{blog && (
									<React.Fragment>
										<h3>Blog</h3>
										<p>{blog}</p>
									</React.Fragment>
								)}
								<div>
									<span className="badge badge-primary m-1">
										Followers: {followers}
									</span>
									<span className="badge badge-primary m-1">
										Following: {following}
									</span>
									<span className="badge badge-primary m-1">
										Public Repo: {public_repos}
									</span>
								</div>
							</div>
							<ul className="list-group list-group-flush">
								<Repos repos={repos} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserDetail;
