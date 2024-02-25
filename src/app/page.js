'use client';

import Header from './components/header';
import MainContent from './components/mainContent';
import data from '../../config.json';
import useTheme from './hooks/useTheme';
import Hero from './components/hero';
import { CartaMenu } from '../../mock';

export default function Home() {
	const { logo, name, altName } = data;
	const theme = useTheme();

	return (
		<main className=''>
			<div className='relative'>
				<Hero name={name} altName={altName} />
			</div>

			<div className='mainGrid'>
				<Header
					className='contenido_1'
					menu={CartaMenu}
					logo={logo}
					theme={theme}
				/>

				<div className='contenido_2 '>
					<MainContent
						name={name}
						altName={altName}
						menu={CartaMenu}
						theme={theme}
					/>
				</div>
			</div>
		</main>
	);
}
