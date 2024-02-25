'use client';
import Header from '../header';
import data from '../../../../config.json';
import useTheme from '../../..//app/hooks/useTheme';
import { CartaMenu } from '../../../../mock';

export default function MainLayout({ children, design }) {
	const { logo, name, altName } = data;
	const theme = useTheme();
	return (
		<div>
			<Header
				className='contenido_1'
				menu={CartaMenu}
				logo={logo}
				theme={theme}
				design={design}
			/>

			{children}
		</div>
	);
}
