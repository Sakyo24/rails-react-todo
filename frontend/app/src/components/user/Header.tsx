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
		<header className="bg-white border-b border-gray-200 fixed z-30 w-full">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center justify-start">
						<h1 className="font-bold text-xl">Ruby on Rails × React TODOアプリ</h1>
					</Link>
					<div className="flex items-center">
						{isAuth ? (
							<>
								<span>{user?.name}</span>
								<div
									onClick={handleLogout}
									className="ml-5 sm:inline-flex text-white bg-cyan-400 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center cursor-pointer"
								>
									ログアウト
								</div>
							</>
						) : (
							<>
								<Link
									to="/register"
									className="ml-5 sm:inline-flex text-white bg-cyan-400 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center cursor-pointer"
								>
									新規登録
								</Link>
								<Link
									to="/login"
									className="ml-5 sm:inline-flex text-white bg-cyan-400 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center cursor-pointer"
								>
									ログイン
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
