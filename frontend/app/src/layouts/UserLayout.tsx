import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import Top from "../pages/Top";
import NotFound from "../pages/NotFound";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import TodosIndex from "../pages/user/todos/Index";
import TodosCreate from "../pages/user/todos/Create";
import TodosEdit from "../pages/user/todos/Edit";
import { setRequestHeaders } from "../utils/requestHeaders";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { currentUser } from "../store/userAuthSlice";

const UserLayout: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setRequestHeaders("user");
		dispatch(currentUser());
	}, []);

	return (
		<>
			<Header />
			<main className="pt-16">
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/todos" element={<TodosIndex />} />
					<Route path="/todos/create" element={<TodosCreate />} />
					<Route path="/todos/:id/edit" element={<TodosEdit />} />
					<Route path="/" element={<Top />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default UserLayout;
