import React from "react";
import loading from "./loading.gif";

export const Loading = (props) => {
	return (
		<React.Fragment>
			<img
				src={loading}
				alt="loading"
				style={{ width: "200px", display: "block", margin: "auto" }}
			/>
		</React.Fragment>
	);
};

export default Loading;
