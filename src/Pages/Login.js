import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

function Login() {
	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					className="login_logo"
				/>
			</Link>
			<div className="login_container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input type="text" />
					<h5>Password</h5>
					<input type="password" />
					<button className="login_signInButton">Sign In</button>
				</form>
				<p>
					By signing-in you agree to fiddiling with Ruben's Amazon clone. Check out the Terms and Conditions.
				</p>
				<button className="login_registerButton">Create your Amazon account</button>
			</div>
		</div>
	);
}

export default Login;
