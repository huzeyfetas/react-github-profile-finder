import React, { useState } from "react";

const Search = ({ setAlert, searchUser, isShow, clearResults }) => {
	const [keyword, setKeyword] = useState("");

	const inputOnChange = (event) => {
		setKeyword(event.target.value);
	};

	const formOnSubmit = (event) => {
		event.preventDefault();
		let word = keyword;
		word = word.trim();
		if (word === "") {
			setAlert(
				"Search box is empty.Are you sure you are searching right? If you are seeing this error message right now, either you or we are doing something wrong. If you are sure ,be cool, I think we did something wrong.",
				"warning",
			);
			return;
		}

		searchUser(keyword);
		setKeyword("");
	};

	return (
		<div className="container mt-2">
			<form onSubmit={formOnSubmit}>
				<div className="input-group">
					<input
						type="text"
						value={keyword}
						onChange={inputOnChange}
						className="form-control"
					/>
					<div className="input-group-append">
						<button type="submit" className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</form>
			{isShow && (
				<button
					onClick={clearResults}
					className="btn btn-md btn-danger btn-block mt-2"
				>
					Clear Results
				</button>
			)}
		</div>
	);
};

export default Search;
