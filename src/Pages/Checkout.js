import React from 'react';
import Subtotal from '../Components/Subtotal';
import '../Styles/Checkout.css';

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349266_.jpg"
				/>
				<div>
					<h2 className="checkout_title">Your shopping basket</h2>
					{/* basket item */}
					{/* basket item */}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
