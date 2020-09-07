import React, { Component } from "react";

export class Search extends Component {
	constructor(props) {
		super(props);
		this.inputOnChange = this.inputOnChange.bind(this);
		this.formOnSubmit = this.formOnSubmit.bind(this);
		this.state = {
			keyword: "",
		};
	}

	inputOnChange(event) {
		this.setState({
			keyword: event.target.value,
		});
	}

	formOnSubmit(event) {
		event.preventDefault();
		this.props.searchUser(this.state.keyword);
		this.setState({
			keyword: "",
		});
	}

	render() {
		return (
			<div className="container mt-2">
				<form onSubmit={this.formOnSubmit}>
					<div className="input-group">
						<input
							type="text"
							value={this.state.keyword}
							onChange={this.inputOnChange}
							className="form-control"
						/>
						<div className="input-group-append">
							<button type="submit" className="btn btn-primary">
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
