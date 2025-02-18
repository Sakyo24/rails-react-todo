import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.userAuth.isAuthenticated);

	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	}, []);

	return <div>Index</div>;
};

export default Index;
