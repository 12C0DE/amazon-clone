import './App.css';
import React, { useEffect, useContext } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalContext } from './Context/GlobalState';
import { auth } from './Firebase/firebase';
import Payment from './Pages/Payment';

//github repo: CleverProgrammers/react-challenge-amazon-clone

function App() {
	const { setUser } = useContext(GlobalContext);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log(`user is: ${authUser}`);

			if (authUser) {
				//the user just logged in OR the user was logged in
				setUser(authUser);
			} else {
				//the user is logged out
				setUser(null);
			}
		});
	}, []);

	//BEM
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route exact path="/payment">
						<Header />
						<Payment />
					</Route>
					<Route path="/404">
						<NotFound />
					</Route>
					<Redirect to="/404" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
