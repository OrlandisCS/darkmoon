import Image from 'next/image';
import MainLayout from './layouts/mainLayout';
import Link from 'next/link';

export default function Alcohol({ contenido }) {
	const obtenerPrecios = (precios) => {
		return (
			<div className='uppercase block'>
				<p className=' md:text-3xl font-bold dark:text-white'>
					{Object.keys(precios)[0]}:{' '}
					{Object.values(precios)[0] != 'No Disponible'
						? Object.values(precios)[0] + '€'
						: Object.values(precios)[0]}
				</p>
				{Object.entries(precios).length >= 2 && (
					<p className=' md:text-3xl font-bold dark:text-white'>
						{Object.keys(precios)[1]}:{' '}
						{Object.values(precios)[1] != 'No Disponible'
							? Object.values(precios)[1] + '€'
							: Object.values(precios)[1]}
					</p>
				)}
				{Object.entries(precios).length >= 3 && (
					<p className=' md:text-3xl font-bold dark:text-white'>
						{Object.keys(precios)[2]}:{' '}
						{Object.values(precios)[2] != 'No Disponible'
							? Object.values(precios)[2] + '€'
							: Object.values(precios)[2]}
					</p>
				)}
			</div>
		);
	};
	const getImagen = (imagen = '') => {
		return imagen.length > 1 ? (
			<Image
				width={350}
				height={300}
				className='p-8 rounded-t-lg'
				src={imagen}
				alt={`product image ${imagen}`}
			/>
		) : (
			''
		);
	};

	return (
		<MainLayout design='menuBebidas'>
			<div className='bg-slate-600 flex justify-center items-center fixed top-0 w-full'>
				{contenido.map((contenido) => (
					<Link
						key={contenido.directory}
						className='text-white bg-slate-900 p-2 m-2 rounded'
						href={`#${contenido.directory}`}
					>
						{contenido.directory}
					</Link>
				))}
			</div>
			{contenido.map((contenido) => (
				<div key={contenido.directory}>
					<div
						id={contenido.directory}
						className='flex justify-center items-center text-3xl text-white bg-slate-500 py-5 font-bold'
					>
						{contenido.directory}
					</div>
					{contenido?.bebibas.map((xBebidas) => (
						<div
							key={xBebidas.id}
							className='w-full max-w-sm bg-gray-800 text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cardBebida'
						>
							{getImagen(xBebidas.imagen)}

							<div
								className={`px-5 pb-5 ${
									!xBebidas.imagen ? 'mt-5' : ''
								}`}
							>
								<a href='#'>
									<h5 className='text-xl font-semibold tracking-tight dark:text-white'>
										{xBebidas.name}
									</h5>
									{xBebidas?.compuesto.map((composicion) => (
										<span className='capitalize' key={composicion}>
											{composicion},{' '}
										</span>
									))}
									<p>
										<p>
											{xBebidas?.sabores.length > 1 ? 'Sabores:' : ''}
											{xBebidas?.sabores.map((sabores) => (
												<span
													key={sabores}
													className='font-bold capitalize'
												>
													{' '}
													{sabores},{' '}
												</span>
											))}
										</p>
									</p>
								</a>
								<div className='flex items-center mt-2.5 mb-5'>
									<div className='flex items-center space-x-1 rtl:space-x-reverse'>
										<svg
											className='w-4 h-4 text-yellow-300'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg
											className='w-4 h-4 text-yellow-300'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg
											className='w-4 h-4 text-yellow-300'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg
											className='w-4 h-4 text-yellow-300'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg
											className='w-4 h-4 text-gray-200 dark:text-gray-600'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='currentColor'
											viewBox='0 0 22 20'
										>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
									</div>
									<span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
										5.0
									</span>
								</div>
								{obtenerPrecios(xBebidas.precios)}
							</div>
						</div>
					))}
				</div>
			))}
		</MainLayout>
	);
}
