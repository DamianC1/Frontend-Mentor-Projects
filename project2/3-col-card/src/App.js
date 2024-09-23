import Sedan from '../src/images/icon-sedans.svg';
import SUV from '../src/images/icon-suvs.svg';
import Luxury from '../src/images/icon-luxury.svg';
import './App.css';
import Card from './components/Card';

function App() {
	return (
		<div className='App flex flex-col items-center  h-screen sm:flex-row sm:justify-center'>
			<Card
				title='SEDAN'
				description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your
					next road trip.'
				styles='rounded-t-md sm:rounded-tr-none sm:rounded-s-md bg-pOrange'
				btnColor='text-pOrange'
				hoverColor='hover:bg-pOrange hover:text-white'
				img={Sedan}
			/>
			<Card
				title='SUVS'
				description='Take an SUV for its spacius interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				styles='bg-pCyan'
				btnColor='text-pCyan'
				hoverColor='hover:bg-pCyan hover:text-white'
				img={SUV}
			/>
			<Card
				title='LUXURY'
				description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
				styles='rounded-b-md sm:rounded-bl-none sm:rounded-e-md bg-pDarkCyan'
				btnColor='text-pDarkCyan'
				hoverColor='hover:bg-pDarkCyan hover:text-white'
				img={Luxury}
			/>
		</div>
	);
}

export default App;
