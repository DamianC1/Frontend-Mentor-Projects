import CompletedIcon from '../images/icon-complete.svg';

function PopupDesktop({ sendDataToHidePopup }) {
	function handleClick() {
		sendDataToHidePopup();
	}

	return (
		<div className='h-[427px] w-[25rem]'>
			<div className='flex justify-center items-center popup  flex-col p-5 h-full'>
				<div className='popup-inner flex items-center justify-center flex-col mb-10'>
					<img className='mb-7' src={CompletedIcon} alt='completed' />
					<h1 className='text-VeryDarkViolet text-[2.125rem] tracking-widest'>THANK YOU!</h1>
					<p className='text-DarkGrayishViolet'>We've added your card details</p>
				</div>
				<button className='border p-3 rounded-lg bg-VeryDarkViolet text-white w-full' onClick={handleClick}>
					Continue
				</button>
			</div>
		</div>
	);
}

export default PopupDesktop;
