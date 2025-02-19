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
		<div className="top-page text-center flex items-center">
			<div className="w-screen text-5xl">
				<p className="text-cyan-400">Ruby on Rails × React TODOアプリ</p>
			</div>
		</div>
	);
};

export default Top;
