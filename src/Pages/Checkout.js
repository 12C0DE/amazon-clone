import React, { useContext } from 'react';
import Subtotal from '../Components/Subtotal';
import CheckoutProduct from '../Components/CheckoutProduct';
import '../Styles/Checkout.css';
import { GlobalContext } from '../Context/GlobalState';

function Checkout() {
	const { basket, user } = useContext(GlobalContext);

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349266_.jpg"
				/>
				<div>
					<h3>Hello {user.email}</h3>
					<h2 className="checkout_title">Your shopping basket</h2>
					{basket.map((item, index) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
