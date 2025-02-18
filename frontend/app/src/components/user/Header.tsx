import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { userLogout } from "../../store/userAuthSlice";

const Header: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.userAuth.isAuthenticated);
	const user = useSelector((state: RootState) => state.userAuth.user);

	const handleLogout = async () => {
		await dispatch(userLogout());
		navigate("/");
	};

	return (
		<header>
			<div>
				<div>
					<Link to="/">Ruby on Rails × React TODOアプリ</Link>
				</div>
				<div>
					{isAuth ? (
						<>
							<span>{user?.name}</span>
							<div onClick={handleLogout}>ログアウト</div>
						</>
					) : (
						<>
							<Link to="/register">新規登録</Link>
							<Link to="/login">ログイン</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
