import Image from 'next/image';
import Link from 'next/link';
const AdaptadorMenu = ({
	id,
	name,
	headerButtonsBG,
	headerButtonsColor,
	icon,
}) => {
	return (
		<Link
			href='/menu/[id]'
			as={`/menu/${id}#carta`}
			style={{
				background: headerButtonsBG,
				color: headerButtonsColor,
				width: '100%',
			}}
			className='flex items-center gap-1 rounded-lg mt-5  bg-slate-600 p-5 text-white font-bold text-normal cursor-pointer md:text-2xl'
		>
			<Image
				src={icon ? icon : '/icons/informacion.png'}
				width={50}
				height={50}
				alt='Icono de el menu'
			/>
			{name}
		</Link>
	);
};

export default AdaptadorMenu;
