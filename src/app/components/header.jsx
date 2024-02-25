import Image from 'next/image';
import AdaptadorMenu from './adaptadorMenu';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = ({
	menu,
	logo,
	theme: {
		headerBG,
		headerColor,
		headerButtonsBG,
		headerButtonsColor,
	},
	design = '',
}) => {
	const { id } = useParams();
	const q = usePathname();
	return (
		<div className='mb-10'>
			<header
				className={`headerStyles`}
				style={{
					background: headerBG,
					color: headerColor,
				}}
			>
				<div
					id='top'
					className='flex mt-5 justify-center items-center'
				>
					<Image src={logo} alt='' width={250} height={250} />
				</div>
				<div className={`headerStyles ${design}`} id='pedir'>
					{menu.map(({ id, name, icon, contenido }) => (
						<AdaptadorMenu
							headerButtonsBG={headerButtonsBG}
							headerButtonsColor={headerButtonsColor}
							key={id}
							id={id}
							name={name}
							icon={icon}
							contenido={contenido}
						/>
					))}
				</div>
			</header>
			<Link href='#top' className='fixed bottom-2 right-2'>
				<Image width={50} height={50} alt='' src='/icons/top.png' />
			</Link>
		</div>
	);
};
export default Header;
