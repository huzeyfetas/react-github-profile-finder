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
		};
	}
	componentDidMount() {
		axios
			.get("https://api.github.com/users")
			.then((res) => {
				// console.log(res);
				// console.log(res.data);
				this.setState({
					users: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		return (
			<>
				<Navbar />
				<Users users={this.state.users} />
			</>
		);
	}
}

export default App;
