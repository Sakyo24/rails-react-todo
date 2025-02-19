import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";

const Create: React.FC = () => {
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.userAuth.isAuthenticated);

	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	}, []);

	return <div>Create</div>;
};

export default Create;
