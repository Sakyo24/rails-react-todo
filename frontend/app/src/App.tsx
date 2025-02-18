import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<UserLayout />} />
				<Route path="/admin/*" element={<AdminLayout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
