import Button from "@mui/material/Button";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<div className="login-container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
					alt="Whatsapp Logo"
				/>

				<div className="login-text">
					<h1>Sign in to Whatsapp</h1>
				</div>

				<Button onClick={signIn}>Sign In wirh Google</Button>
			</div>
		</div>
	);
}

export default Login;
