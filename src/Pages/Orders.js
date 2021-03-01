import React, { useContext, useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import Order from '../Components/Order';
import { GlobalContext } from '../Context/GlobalState';

function Orders() {
	const [
		orders,
		setOrders
	] = useState([]);
	const { user } = useContext(GlobalContext);

	useEffect(
		() => {
			if (user) {
				db
					.collection('users')
					.doc(user.uid)
					.collection('orders')
					.orderBy('created', 'desc')
					.onSnapshot((snap) => {
						setOrders(
							snap.docs.map((doc) => ({
								id   : doc.id,
								data : doc.data()
							}))
						);
					});
			} else {
				setOrders([]);
			}
		},
		[
			user
		]
	);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			<div className="orders_order">
				{orders.map((order) => {
					<Order order={order} />;
				})}
			</div>
		</div>
	);
}

export default Orders;
