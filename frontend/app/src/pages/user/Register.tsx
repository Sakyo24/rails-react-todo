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
			<h3>会員登録</h3>
			<form>
				<div>
					<label htmlFor="name">名前</label>
					<input
						id="name"
						type="text"
						placeholder="user1"
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoComplete="name"
					/>
				</div>
				<div>
					<label htmlFor="email">メールアドレス</label>
					<input
						id="email"
						type="email"
						placeholder="user1@sample.com"
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
				<div>
					<label htmlFor="password_confirmation">パスワード確認</label>
					<input
						id="password_confirmation"
						type="password"
						placeholder="Password1234"
						value={password_confirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						autoComplete="current-password"
					/>
				</div>
				<div onClick={handleRegister}>登録</div>
			</form>
		</div>
	);
};

export default Register;
