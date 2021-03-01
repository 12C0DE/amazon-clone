const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51IPXlIAqv8pMzNmGZZWN5uCKifxkUD5kmgJ83ZZiVVEK1EHGTQwHz6RVCBI8WdjGkrqMdUtJ9siMI0QKvJkZ63Nv00xKoC4erC'
);

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log(`payment request recieved: >>>> ${total}`);

	const paymentIntent = await stripe.paymentIntents.create({ amount: total, currency: 'usd' });

	response.status(201).send({
		clientSecret : paymentIntent.client_secret
	});
});

//listen command
exports.api = functions.https.onRequest(app);

//example endpoint:
//http://localhost:5001/clone-361c1/us-central1/api
