import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/admin/Header";
import Footer from "../components/admin/Footer";
import NotFound from "../pages/NotFound";
import Login from "../pages/admin/Login";
import TodosIndex from "../pages/admin/todos/Index";
import TodosCreate from "../pages/admin/todos/Create";
import TodosEdit from "../pages/admin/todos/Edit";
import { setRequestHeaders } from "../utils/requestHeaders";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { currentAdmin } from "../store/adminAuthSlice";

const AdminLayout: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setRequestHeaders("admin");
		dispatch(currentAdmin());
	}, []);

	return (
		<>
			<Header />
			<main className="pt-16">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/todos" element={<TodosIndex />} />
					<Route path="/todos/create" element={<TodosCreate />} />
					<Route path="/todos/:id/edit" element={<TodosEdit />} />
					<Route path="/" element={<Navigate to="/admin/login" />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default AdminLayout;
