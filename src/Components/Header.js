import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { auth } from '../Firebase/firebase';
import '../Styles/Header.css';

const Header = () => {
	const { basket, user } = useContext(GlobalContext);

	const sign_in_out =
		user ? 'Sign Out' :
		'Sign In';

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	const ampIndex = user.email.indexOf('@', 0);
	const getEmailName = user.email.substr(0, ampIndex);

	return (
		<div className="header">
			<Link to="/">
				<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" />
			</Link>
			<div className="header_search">
				<input type="text" className="header_searchInput" />
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header_nav">
				{/* Hello sign in */}
				<Link to={!user && '/login'}>
					<div className="header_option" onClick={handleAuth}>
						<span className="header_optionLine1">Hello {getEmailName}</span>
						<span className="header_optionLine2">{sign_in_out}</span>
					</div>
				</Link>
				<div className="header_option">
					{/* returns & orders */}
					<span className="header_optionLine1">Returns</span>
					<span className="header_optionLine2">& Orders</span>
				</div>
				<div className="header_option">
					{/* your prime  */}
					<span className="header_optionLine1">Your</span>
					<span className="header_optionLine2">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header_optionBasket">
						<ShoppingBasketIcon />
						<span className="header_optionLine2 header_basketCount">{basket.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
