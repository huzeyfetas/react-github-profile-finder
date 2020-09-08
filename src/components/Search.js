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
		let word = this.state.keyword;
		word = word.trim();
		if (word === "") {
			this.props.setAlert(
				"Search box is empty.Are you sure you are searching right? If you are seeing this error message right now, either you or we are doing something wrong. If you are sure ,be cool, I think we did something wrong.",
				"warning",
			);
			return;
		}

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
				{this.props.isShow && (
					<button
						onClick={this.props.clearResults}
						className="btn btn-md btn-danger btn-block mt-2"
					>
						Clear Results
					</button>
				)}
			</div>
		);
	}
}

export default Search;
