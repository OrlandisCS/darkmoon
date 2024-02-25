import useTheme from '@/app/hooks/useTheme';

export default function MainButton({
	children,
	contentBtn,
	parentClases,
}) {
	const { mainButtonBG, mainButtonColor } = useTheme();
	const usepedido = () => {
		console.log('desde el pedido');
		/* const mensaje = SendMessage({
			message: `Shisha de menta`,
		});
		console.log(mensaje); */
	};
	return (
		<button
			onClick={usepedido}
			style={{
				background: mainButtonBG,
				color: mainButtonColor,
				border: 'none',
				outline: 'none',
				display: 'block',
				width: '270px',
				zIndex: 999,
			}}
			className={`${parentClases}`}
		>
			{children}
		</button>
	);
}
