import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { adminLogout } from "../../store/adminAuthSlice";

const Header: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.adminAuth.isAuthenticated);
	const admin = useSelector((state: RootState) => state.adminAuth.admin);

	const handleLogout = async () => {
		await dispatch(adminLogout());
		navigate("/admin/login");
	};

	return (
		<header>
			<div>
				<div>
					<Link to="/">Ruby on Rails × React TODOアプリ　管理画面</Link>
				</div>
				<div>
					{isAuth ? (
						<>
							<span>{admin?.name}</span>
							<div onClick={handleLogout}>ログアウト</div>
						</>
					) : (
						<>
							<Link to="/admin/login">ログイン</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
