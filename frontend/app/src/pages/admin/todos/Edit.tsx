import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";

const Edit: React.FC = () => {
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.adminAuth.isAuthenticated);

	useEffect(() => {
		if (!isAuth) {
			navigate("/admin/login");
		}
	}, []);

	return (
		<div>
			<h3 className="p-3 text-xl font-bold">Todo編集</h3>
		</div>
	);
};

export default Edit;
