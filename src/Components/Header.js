import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import '../Styles/Header.css';

const Header = () => {
	const [
		{ basket },
		dispatch
	] = useStateValue();

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
				<div className="header_option">
					{/* Hello sign in */}
					<span className="header_optionLine1">Hello guest</span>
					<span className="header_optionLine2">Sign In</span>
				</div>
				<div className="header_option">
					{/* returns & orders */}
					<span className="header_optionLine1">Returns</span>
					<span className="header_optionLine2">& orders</span>
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
