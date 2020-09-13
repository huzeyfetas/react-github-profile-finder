import React from "react";

function Repo({ repo }) {
	return (
		<li className="list-group-item">
			<i className="fas fa-project-diagram"></i>
			<a href={repo.html_url}> {repo.name}</a>
		</li>
	);
}

export default Repo;
