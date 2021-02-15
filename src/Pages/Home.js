import React from 'react';
import Product from '../Components/Product';
import '../Styles/Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_MapofTinyPerfectThings/4cec5bd7-c000-4096-bf2d-491f7c7bcabf._UR3000,600_SX1500_FMjpg_.jpg"
					alt="amazon-bckgrnd"
				/>
				<div className="home_row">
					<Product
						id="1234555"
						title="The Lean Startup"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={4}
					/>
					<Product
						id="67856"
						title="DVD"
						price={123.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						rating={2}
					/>
				</div>
				<div className="home_row">
					<Product
						id="123455455"
						title="Kenwood mixer"
						price={39.99}
						image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
						rating={2}
					/>
					<Product
						id="123434555"
						title="Samsung LCTV"
						price={129.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						rating={5}
					/>
					<Product
						id="676567"
						title="iPad"
						price={429.99}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						rating={3}
					/>
				</div>
				{/* <div className="home_row">
					<Product />
				</div> */}
			</div>
		</div>
	);
}

export default Home;
