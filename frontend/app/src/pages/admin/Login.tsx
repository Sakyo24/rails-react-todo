import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { adminLogin } from "../../store/adminAuthSlice";

const Login: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.adminAuth.isAuthenticated);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	useEffect(() => {
		if (isAuth) {
			navigate("/admin/todos");
		}
	}, [isAuth, navigate]);

	const handleLogin = () => {
		dispatch(adminLogin({ email, password }));
	};

	return (
		<div>
			<h3 className="p-3 text-xl font-bold">ログイン</h3>
			<form className="w-150 m-auto p-5 border-1 border-cyan-300">
				<div className="mb-3">
					<label htmlFor="email">メールアドレス</label>
					<input
						id="email"
						type="email"
						placeholder="admin1@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password">パスワード</label>
					<input
						id="password"
						type="password"
						placeholder="Password1234"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="current-password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="text-center">
					<div
						onClick={handleLogin}
						className="ml-5 sm:inline-flex text-white bg-cyan-400 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center cursor-pointer"
					>
						ログイン
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
