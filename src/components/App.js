import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import User from "./User";
import axios from "axios";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			loading: false,
		};
	}
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
	render() {
		return (
			<>
				<Navbar />
				<Users loading={this.state.loading} users={this.state.users} />
			</>
		);
	}
}

export default App;
