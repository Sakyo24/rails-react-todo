import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/User";
import { removeCookieToken, setCookieToken } from "../utils/cookie";
import { setRequestHeaders } from "../utils/requestHeaders";

interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

interface RegisterInputs {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

interface LoginInputs {
	email: string;
	password: string;
}

export const userRegister = createAsyncThunk("userAuth/userRegister", async (inputs: RegisterInputs) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user`, inputs);
	setCookieToken(
		response.headers["access-token"],
		response.headers.client,
		response.headers.uid,
		response.headers.expiry,
		"user"
	);
	setRequestHeaders("user");

	return response.data;
});

export const userLogin = createAsyncThunk("userAuth/userLogin", async (inputs: LoginInputs) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/sign_in`, inputs);
	setCookieToken(
		response.headers["access-token"],
		response.headers.client,
		response.headers.uid,
		response.headers.expiry,
		"user"
	);
	setRequestHeaders("user");

	return response.data;
});

export const userLogout = createAsyncThunk("userAuth/userLogout", async () => {
	await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/sign_out`);
	removeCookieToken("user");
});

export const currentUser = createAsyncThunk("userAuth/currentUser", async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/validate_token`);
	return response.data;
});

const userAuthSlice = createSlice({
	name: "userAuth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// 登録
			.addCase(userRegister.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.user = action.payload.data;
			})
			.addCase(userRegister.rejected, (_state, _action) => {
				alert("登録に失敗しました。");
			})
			// ログイン
			.addCase(userLogin.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.user = action.payload.data;
			})
			.addCase(userLogin.rejected, (_state, _action) => {
				alert("ログインに失敗しました。");
			})
			// ログアウト
			.addCase(userLogout.fulfilled, (state, _action) => {
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(userLogout.rejected, (_state, _action) => {
				alert("ログアウトに失敗しました。");
			})
			// ログインユーザー取得
			.addCase(currentUser.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.user = action.payload.data;
			})
			.addCase(currentUser.rejected, (state, _action) => {
				state.isAuthenticated = false;
				state.user = null;
				removeCookieToken("user");
			});
	},
});

export default userAuthSlice.reducer;
