import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../Components/CheckoutProduct';
import { GlobalContext } from '../Context/GlobalState';
import '../Styles/Payment.css';

function Payment() {
	const { basket, user } = useContext(GlobalContext);

	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{basket.length} items</Link>)
				</h1>
				{/* payment section - delivery address */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user.email}</p>
						<p>123 React Lane</p>
						<p>Olathe, KS</p>
					</div>
				</div>
				{/* payment section - review items */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{/* products show here */}
						{basket.map((item, index) => (
							<CheckoutProduct
								key={`${item.id}_${index}`}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				{/* payment section - payment method */}
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>

					<div className="payment_details">{/* stripe magic here */}</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
