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
			<h3>ログイン</h3>
			<form>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						id="email"
						type="email"
						placeholder="admin1@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
					/>
				</div>
				<div>
					<label htmlFor="password">パスワード</label>
					<input
						id="password"
						type="password"
						placeholder="Password1234"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="current-password"
					/>
				</div>
				<div onClick={handleLogin}>ログイン</div>
			</form>
		</div>
	);
};

export default Login;
