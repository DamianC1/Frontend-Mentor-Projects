import './App.css';
import BgcM from './images/bg-main-mobile.png';
import CardBack from './images/bg-card-back.png';
import CardFront from './images/bg-card-front.png';
import Popup from './components/Popup';
import PopupDesktop from './components/PopupDesktop';
import { useState } from 'react';
import { userSchema } from './validations/UserValidation';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
function App() {
	const [hide, sethide] = useState(true);
	const [showPopup, setShowPopup] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userSchema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	function hideForm() {
		sethide(false);
		setShowPopup(true);
	}

	function hidePopup() {
		sethide(true);
		setShowPopup(false);
	}

	return (
		<div className='Main h-screen font-pMainFont'>
			{/* MOBILE */}
			<div className='mobile-app-form relative min-h-[41.688rem] sm:hidden'>
				<img src={BgcM} alt='bgc' />
				<div className='absolute top-8 right-4 '>
					<img className='w-[18rem]' src={CardBack} alt='card back' />
					<div className='absolute top-[4.313rem] right-9 text-white text-xs'>000</div>
				</div>
				<div className='absolute top-[7.625rem] left-4'>
					<img className='w-[18rem]' src={CardFront} alt='card front' />
					<div className='absolute bottom-12 left-7 tracking-widest text-lg text-white'>0000 0000 0000 0000</div>
					<div className='absolute bottom-4 left-7 text-white text-xs'>Jane Appleseed</div>
					<div className='absolute bottom-4 right-7 text-white text-xs'>00/00</div>
					<div className='absolute border rounded-full top-5 left-7 border-white bg-white w-8 h-8 '></div>
					<div className='absolute border rounded-full top-[1.875rem] left-[4.313rem] border-white w-[0.875rem] h-[0.875rem] '></div>
				</div>
			</div>
			{/* DESKTOP */}
			<div className='hidden sm:visible desktop sm:flex sm:h-screen'>
				<div className="flex h-full bg-[url('./images/bg-main-desktop.png')] bg-cover flex-1">
					<div className='absolute top-[30.313rem] left-[26rem] '>
						<img className='w-[32rem] shadow-2xl rounded-lg' src={CardBack} alt='card back' />
						<div className='absolute top-[4.313rem] right-9 text-white text-xs'>000</div>
					</div>
					<div className='absolute top-[10.5rem] left-[20rem]'>
						<img className='w-[32rem] shadow-2xl rounded-lg' src={CardFront} alt='card front' />
						<div className='absolute bottom-12 left-7 tracking-widest text-lg text-white'>0000 0000 0000 0000</div>
						<div className='absolute bottom-4 left-7 text-white text-xs'>Jane Appleseed</div>
						<div className='absolute bottom-4 right-7 text-white text-xs'>00/00</div>
						<div className='absolute border rounded-full top-5 left-7 border-white bg-white w-8 h-8 '></div>
						<div className='absolute border rounded-full top-[1.875rem] left-[4.313rem] border-white w-[0.875rem] h-[0.875rem] '></div>
					</div>
				</div>
				<div className='flex h-full flex-[2] items-center justify-center'></div>
			</div>
		</div>
	);
}

export default App;
