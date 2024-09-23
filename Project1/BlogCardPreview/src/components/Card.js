import Profile from '../images/image-avatar.webp';
import HeaderPic from '../images/illustration-articlee.png';
export default function Card() {
	return (
		<div className='bg-white card border rounded-2xl border-slate-950 min-h-[30rem] sm:max-w-[24rem]  max-w-[21rem] shadow-myShadow font-projectFont'>
			<div className='header-image p-5 mx-auto'>
				<img className='rounded-2xl' src={HeaderPic} alt='header img' />
			</div>
			<div className='content-section px-[20px]'>
				<div className='inline-block px-4 py-1 mb-3 bg-yellow-300 font-bold rounded-md'>Learning</div>
				<div className='font-medium mb-2'>Published 21 Dec 2023</div>
				<h2 className='text-[1.5rem] font-bold mb-3 hover:text-amber-300 cursor-pointer'>HTML & CSS foundations</h2>
				<p className='text-slate-600 mb-6'>
					These languages are the backbone of every website, defining structure, content, and presentation.
				</p>
				<div className='profile mb-6'>
					<img className='h-8 w-8 inline-block mr-3' src={Profile} alt='img' />{' '}
					<div className='inline-block font-bold'>Greg Hooper</div>
				</div>
			</div>
		</div>
	);
}
