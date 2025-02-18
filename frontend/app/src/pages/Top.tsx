import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

const Top: React.FC = () => {
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.userAuth.isAuthenticated);

	useEffect(() => {
		if (isAuth) {
			navigate("/todos");
		}
	}, [isAuth, navigate]);

	return (
		<div>
			<div>
				<p>Ruby on Rails × React TODOアプリ</p>
			</div>
		</div>
	);
};

export default Top;
