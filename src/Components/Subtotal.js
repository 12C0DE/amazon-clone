import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { GlobalContext } from '../Context/GlobalState';
import { useHistory } from 'react-router-dom';
import '../Styles/Subtotal.css';

function Subtotal() {
	const history = useHistory();
	const { basket } = useContext(GlobalContext);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />This order contains a gift
						</small>
					</React.Fragment>
				)}
				decimalScale={2}
				value={basket.map((items) => items.price).reduce((amount, price) => price + amount, 0)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button onClick={(e) => history.push('/payment')}>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
