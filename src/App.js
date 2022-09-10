import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app-body">
					<BrowserRouter>
						<Sidebar />
						<Routes>
							<Route
								path="/rooms/:roomId"
								element={
									<>
										<Chat />
									</>
								}
							/>

							<Route path="/" element={<Chat />} />
						</Routes>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
}

export default App;
