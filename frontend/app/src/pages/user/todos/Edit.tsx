import React from "react";
import { Navigate } from "react-router-dom";

const Edit: React.FC = () => {
	const user = true;

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <div>Edit</div>;
};

export default Edit;
