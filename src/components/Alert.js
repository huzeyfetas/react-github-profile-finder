import React from "react";

export const Alert = (props) => {
	return (
		props.alert && (
			<div
				className={`alert alert-${props.alert.type} alert-dismissible fade show container my-2`}
				role="alert"
			>
				<strong>{`${props.alert.msg}`}</strong>
				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	);
};

export default Alert;
