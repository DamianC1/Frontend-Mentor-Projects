export default function Card({ title, description, styles, btnColor, img, hoverColor }) {
	return (
		<div className={`max-w-[20rem] ${styles}`}>
			<div className='content p-12'>
				<img className='icon mb-6' src={img} alt='sedan' />
				<div className='heading text-[2.125rem] text-white mb-6 font-pBig'>{title}</div>
				<p className='description text-pWhite mb-6 sm:mb-20 font-pLex'>{description}</p>
				<button className={`border-2 border-white btn py-2.5 px-7 rounded-full bg-white font-pLex ${btnColor} ${hoverColor}`}>
					Learn More
				</button>
			</div>
		</div>
	);
}
