import React from 'react';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import '../Styles/Orders.css';

function Order({ order }) {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
			<p className="order_id">
				<small>{order.id}</small>
			</p>
			{order.data.basket.map((item, index) => (
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
	);
}

export default Order;
