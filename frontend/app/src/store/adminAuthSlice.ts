import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Admin } from "../types/Admin";
import { removeCookieToken, setCookieToken } from "../utils/cookie";
import { setRequestHeaders } from "../utils/requestHeaders";

interface AuthState {
	isAuthenticated: boolean;
	admin: Admin | null;
}

const initialState: AuthState = {
	isAuthenticated: false,
	admin: null,
};

interface LoginInputs {
	email: string;
	password: string;
}

export const adminLogin = createAsyncThunk("adminAuth/adminLogin", async (inputs: LoginInputs) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/sign_in`, inputs);
	setCookieToken(
		response.headers["access-token"],
		response.headers.client,
		response.headers.uid,
		response.headers.expiry,
		"admin"
	);
	setRequestHeaders("admin");

	return response.data;
});

export const adminLogout = createAsyncThunk("adminAuth/adminLogout", async () => {
	await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/admin/sign_out`);
	removeCookieToken("admin");
});

export const currentAdmin = createAsyncThunk("adminAuth/currentAdmin", async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/validate_token`);
	return response.data;
});

const adminAuthSlice = createSlice({
	name: "adminAuth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// ログイン
			.addCase(adminLogin.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.admin = action.payload.data;
			})
			.addCase(adminLogin.rejected, (_state, _action) => {
				alert("ログインに失敗しました。");
			})
			// ログアウト
			.addCase(adminLogout.fulfilled, (state, _action) => {
				state.isAuthenticated = false;
				state.admin = null;
			})
			.addCase(adminLogout.rejected, (_state, _action) => {
				alert("ログアウトに失敗しました。");
			})
			// ログイン管理者取得
			.addCase(currentAdmin.fulfilled, (state, action) => {
				state.isAuthenticated = true;
				state.admin = action.payload.data;
			})
			.addCase(currentAdmin.rejected, (state, _action) => {
				state.isAuthenticated = false;
				state.admin = null;
				removeCookieToken("admin");
			});
	},
});

export default adminAuthSlice.reducer;
