import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import User from "./User";
import Search from "./Search";
import axios from "axios";

export class App extends Component {
	constructor(props) {
		super(props);
		this.searchUser = this.searchUser.bind(this);
		this.state = {
			users: [],
			loading: false,
		};
	}

	// componentDidMount() {
	// 	this.setState({ loading: true });
	// 	setTimeout(() => {
	// 		axios
	// 			.get("https://api.github.com/users")
	// 			.then((res) => {
	// 				console.log(res);
	// 				console.log(res.data);
	// 				this.setState({
	// 					users: res.data,
	// 					loading: false,
	// 				});
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}, 1000);
	// }

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

	render() {
		return (
			<>
				<Navbar />
				<Search searchUser={this.searchUser}></Search>
				<Users loading={this.state.loading} users={this.state.users} />
			</>
		);
	}
}

export default App;
