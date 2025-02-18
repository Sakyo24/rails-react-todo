import React from "react";
import { Navigate } from "react-router-dom";

const Create: React.FC = () => {
	const user = true;

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <div>Create</div>;
};

export default Create;
