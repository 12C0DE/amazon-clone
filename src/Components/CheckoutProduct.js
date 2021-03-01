import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../Styles/CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
	const { removeFromBasket } = useContext(GlobalContext);

	return (
		<div className="checkoutProduct">
			<img src={image} className="checkoutProduct_image" />

			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">{Array(rating).fill().map((_, i) => <p>⭐</p>)}</div>
				<button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
