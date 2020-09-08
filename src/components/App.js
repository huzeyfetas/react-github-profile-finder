import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import User from "./User";
import Search from "./Search";
import Alert from "./Alert";
import axios from "axios";

export class App extends Component {
	constructor(props) {
		super(props);
		this.searchUser = this.searchUser.bind(this);
		this.clearResults = this.clearResults.bind(this);
		this.setAlert = this.setAlert.bind(this);

		this.state = {
			users: [],
			loading: false,
			alert: null,
		};
	}

	/*
  componentDidMount() {
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get("https://api.github.com/users")
				.then((res) => {
					console.log(res);
					console.log(res.data);
					this.setState({
						users: res.data,
						loading: false,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1000);
  }
   */

	/*
	getSucccesAlert() {
		return (
			<div
				className="alert alert-success alert-dismissible fade show mt-2 container"
				role="alert"
			>
				<strong>Results Cleared!</strong>
				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
  }
  */

	/*
	getError() {
		return (
			<div
				className="alert alert-warning alert-dismissible fade show mt-2 container"
				role="alert"
			>
				<p>
					<strong>
						Search box is empty. Are you sure you are searching right?
					</strong>
				</p>
				<div>
					<p>
						If you are seeing this error message right now, either you or we are
						doing something wrong. <br /> If you are sure ,be cool, I think we
						did something wrong.
					</p>
				</div>

				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
  }
  */

	searchUser(user) {
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get(`https://api.github.com/search/users?q=${user}`)
				.then((res) => {
					console.log(res);
					console.log(res.data.items);
					this.setState({
						users: res.data.items,
						loading: false,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}, 1000);
	}

	clearResults() {
		this.setState({ users: [] });
	}

	setAlert(msg, type) {
		this.setState({
			alert: { msg, type },
		});

		// setTimeout(() => {
		// 	this.setState({
		// 		alert: null,
		// 	});
		// }, 3000);
	}

	render() {
		return (
			<>
				<Navbar />
				<Search
					searchUser={this.searchUser}
					clearResults={this.clearResults}
					isShow={this.state.users.length > 0}
					setAlert={this.setAlert}
				></Search>
				<Alert alert={this.state.alert} />
				<Users loading={this.state.loading} users={this.state.users} />
			</>
		);
	}
}

export default App;
