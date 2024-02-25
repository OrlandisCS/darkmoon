import AdaptadorMenu from '../adaptadorMenu';

const Carta = ({
	menu,
	theme: { headerButtonsBG, headerButtonsColor },
}) => {
	return (
		<div className='px-5' id='pideAhora'>
			{menu.map(({ id, name }) => (
				<AdaptadorMenu
					headerButtonsBG={headerButtonsBG}
					headerButtonsColor={headerButtonsColor}
					key={id}
					id={id}
					name={name}
				/>
			))}
		</div>
	);
};

export default Carta;
