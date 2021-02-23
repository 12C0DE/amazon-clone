import React from 'react';
import '../Styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Subtotal() {
	const [
		{ basket }
	] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length} items):{' '}
							<strong>${basket.map((item) => item.price).reduce((a, b) => a + b, 0)}</strong>
						</p>
						<small className="subtotal_gift">
							<input type="checkbox" />This order contains a gift
						</small>
					</React.Fragment>
				)}
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
