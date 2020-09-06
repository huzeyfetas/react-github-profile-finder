import React, { Component } from "react";
import User from "./User";
import Card from "./Card";

export class Users extends Component {
	render() {
		return (
			<div className="container mt-3">
				<div className="row ">
					{this.props.users.map((user, index) => {
						return <Card key={index} user={user} />;
					})}
				</div>
			</div>
		);
	}
}

export default Users;
