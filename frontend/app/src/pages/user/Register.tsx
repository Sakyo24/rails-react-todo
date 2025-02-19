import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { userRegister } from "../../store/userAuthSlice";

const Register: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const isAuth = useSelector((state: RootState) => state.userAuth.isAuthenticated);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [password_confirmation, setPasswordConfirmation] = useState<string>("");

	useEffect(() => {
		if (isAuth) {
			navigate("/todos");
		}
	}, [isAuth, navigate]);

	const handleRegister = () => {
		dispatch(userRegister({ name, email, password, password_confirmation }));
	};

	return (
		<div>
			<h3 className="p-3 text-xl font-bold">会員登録</h3>
			<form className="w-150 m-auto p-5 border-1 border-cyan-300">
				<div className="mb-3">
					<label htmlFor="name">名前</label>
					<input
						id="name"
						type="text"
						placeholder="user1"
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email">メールアドレス</label>
					<input
						id="email"
						type="email"
						placeholder="user1@sample.com"
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
				<div className="mb-3">
					<label htmlFor="password_confirmation">パスワード確認</label>
					<input
						id="password_confirmation"
						type="password"
						placeholder="Password1234"
						value={password_confirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						autoComplete="current-password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
				<div className="text-center">
					<div
						onClick={handleRegister}
						className="ml-5 sm:inline-flex text-white bg-cyan-400 hover:bg-cyan-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center cursor-pointer"
					>
						登録
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;
