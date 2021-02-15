import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	//BEM
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
					</Route>
					<Route exact path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/404">
						<h1>404 NOT FOUND</h1>
					</Route>
					<Redirect to="/404" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
