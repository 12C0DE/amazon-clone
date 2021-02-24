import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { GlobalProvider } from './Context/GlobalState';

//github repo: CleverProgrammers/react-challenge-amazon-clone

function App() {
	//BEM
	return (
		<GlobalProvider>
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
						<Route path="/404">
							<NotFound />
						</Route>
						<Redirect to="/404" />
					</Switch>
				</div>
			</Router>
		</GlobalProvider>
	);
}

export default App;
