'use client';
import { SendMessage } from '../hooks/useSendData';
import useTheme from '../hooks/useTheme';

export default function Hero({ name, altName }) {
	const heigthHero = 'h-[calc(100vh-8rem)]';
	const { mainButtonBG, mainButtonColor } = useTheme();

	/* const usepedido = async () => {
		const mensaje = await SendMessage({
			message: `Shisha de menta`,
		});
	}; */

	return (
		<section
			className={`w-full flex items-center justify-center px-4 text-white md: ${heigthHero}`}
			id='inicio'
		>
			<video
				className='absolute h-full object-cover w-full'
				autoPlay
				loop
				muted
				poster='/img/4.jpg'
			>
				<source src='/img/shisha.webm' type='video/webm' />
				<source src='/img/shisha.mp4' type='video/mp4' />
			</video>
			{/* overlay de la imagen */}
			<div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50'></div>

			<div className='flex flex-col gap-3'>
				<h1 className='text-center text-4xl font-bold mix-blend-difference md:text-8xl'>
					{name}
				</h1>
				<p className='text-center text-base font-bold mix-blend-difference md:text-5xl'>
					{altName}
				</p>
				<div className='flex justify-center items-center'>
					<button
						className='py-2 mt-5 font-bold text-xl rounded'
						style={{
							background: mainButtonBG,
							color: mainButtonColor,
							border: 'none',
							outline: 'none',
							display: 'block',
							width: '270px',
							zIndex: 999,
						}}
					>
						<a href='#pedir'>Pedir Ahora</a>
					</button>
				</div>
			</div>
		</section>
	);
}
