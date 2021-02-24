import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import '../Styles/Product.css';

function Product({ id, title, image, price, rating }) {
	const { basket, addToBasket } = useContext(GlobalContext);

	console.log('basket', basket);

	const addProductToBasket = () => {
		const product = {
			id     : id,
			title  : title,
			image  : image,
			price  : price,
			rating : rating
		};

		addToBasket(product);
	};

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">{Array(rating).fill().map((_, i) => <span>⭐</span>)}</div>
			</div>
			<img src={image} />
			<button onClick={() => addProductToBasket()}>Add to basket</button>
		</div>
	);
}

export default Product;
