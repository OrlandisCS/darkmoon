import { v4 as uuid } from 'uuid';
export const CartaMenu = [
	//Echo
	{
		id: 1,
		icon: '/icons/coctel.png',
		name: 'Cócteles Clasicos',
		contenido: [
			{
				id: uuid(),
				name: 'Mojito',
				compuesto: ['Ron', 'lima', 'menta', 'soda', 'angostura'],
				sabores: ['clásico', 'fresa', 'piña', 'maracuya', 'coco'],
				precios: {
					alcohol: 8,
					sin: 7,
				},
				imagen: '/img/bebidas/1.webp',
			},
			{
				id: uuid(),
				name: 'Piña Colada',
				compuesto: ['Ron', 'Coco', 'Piña'],
				sabores: ['Único'],
				precios: {
					alcohol: 9,
					sin: 7,
				},
				imagen: '/img/bebidas/2.webp',
			},
			{
				id: uuid(),
				name: 'San Francisco',
				compuesto: [
					'Vodka',
					'Malibú',
					'Jugo de piña',
					'Melocotón',
					'Naranja',
					'Granadina',
				],
				sabores: ['Único'],
				precios: {
					alcohol: 9,
					sin: 7,
				},
				imagen: '/img/bebidas/3.webp',
			},
			{
				id: uuid(),
				name: 'Daiquiri Frozen',
				compuesto: ['Cóctel a base de ron', 'lima', 'Fruta a elegir'],
				sabores: ['fresa', 'mango', 'piña', 'platano'],
				precios: {
					alcohol: 9,
					sin: 7,
				},
				imagen: '/img/bebidas/4.webp',
			},
			{
				id: uuid(),
				name: 'Margarita Frozen',
				compuesto: [
					'Cóctel a base de tequila',
					'cointreau',
					'lima',
					'fruta',
				],
				sabores: ['fresa', 'piña', 'maracuya', 'mango'],
				precios: {
					alcohol: 9,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/5.webp',
			},
			{
				id: uuid(),
				name: 'Long Island',
				compuesto: [
					'Ron',
					'vodka',
					'tequila',
					'gin',
					'cointreau',
					'Coca-Cola',
				],
				sabores: [],
				precios: {
					alcohol: 9,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/6.webp',
			},
			{
				id: uuid(),
				name: 'Manhatan',
				compuesto: ['Bourboun', 'vermuth rojo', 'angostura'],
				sabores: [],
				precios: {
					alcohol: 9,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/7.webp',
			},
			{
				id: uuid(),
				name: 'Cosmopolitan',
				compuesto: ['Vodka', 'cointreau', 'lima', 'arandanos'],
				sabores: [],
				precios: {
					alcohol: 9,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/5.webp',
			},
		],
	},
	//Echo
	{
		id: 2,
		icon: '/icons/cocteles.png',
		name: 'Cócteles de la casa',
		contenido: [
			{
				id: uuid(),
				name: 'Dark Moon',
				compuesto: ['ron kraken', 'Manzana🍎', 'granadina'],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/9.webp',
			},
			{
				id: uuid(),
				name: '2 Moons',
				compuesto: ['malibú', 'blue curasao', 'fresa🍓', 'piña🍍'],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 9,
				},
				imagen: '/img/bebidas/10.webp',
			},
			{
				id: uuid(),
				name: 'Pink Moon',
				compuesto: ['Ron', 'coco🥥', 'fresa🍓', 'naranja🟠'],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 9,
				},
				imagen: '/img/bebidas/11.webp',
			},
			{
				id: uuid(),
				name: 'Bombon Moon',
				compuesto: [
					'Vodka',
					'bayleis',
					'frangelico',
					'chocolate🍫',
					'nata',
				],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/12.webp',
			},
			{
				id: uuid(),
				name: 'Green Moon',
				compuesto: ['Ron', 'blue curasao', 'piña🍍', 'coco🥥'],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 9,
				},
				imagen: '/img/bebidas/13.webp',
			},
			{
				id: uuid(),
				name: 'Exotic Moon',
				compuesto: [
					'aguardiente',
					'disaronno',
					'maracuyá',
					'manzana🍎',
				],
				sabores: [],
				precios: {
					alcohol: 12,
					sin: 'No Disponible',
				},
				imagen: '/img/bebidas/14.webp',
			},
			{
				id: uuid(),
				name: 'Black Moon',
				compuesto: ['vodka negro', 'lima🍋', 'fresa🍓', 'naranja🟠'],
				sabores: [],
				precios: {
					alcohol: 'No Disponible',
					sin: 12,
				},
				imagen: '/img/bebidas/15.webp',
			},
		],
	},
	//TODO:  Echo
	{
		id: 3,
		icon: '/icons/espiritu.png',
		name: 'Alcohol',
		contenido: [
			//Echo
			{
				directory: 'Wiskhy',
				bebibas: [
					{
						id: uuid(),
						name: 'Red label',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/31.webp',
					},
					{
						id: uuid(),
						name: 'Ballantines',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/32.webp',
					},
					{
						id: uuid(),
						name: 'Black Label',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/33.webp',
					},
					{
						id: uuid(),
						name: 'Chivas',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/34.webp',
					},
					{
						id: uuid(),
						name: 'Jack Daniels',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/35.webp',
					},
					{
						id: uuid(),
						name: 'Gold Label',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 5,
							cubata: 12,
							botella: 100,
						},
						imagen: '/img/bebidas/36.webp',
					},
					{
						id: uuid(),
						name: 'Old Par',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 5,
							cubata: 12,
							botella: 100,
						},
						imagen: '/img/bebidas/37.webp',
					},
				],
			},
			//TODO: NO Echo
			{
				directory: 'Vodka',
				bebibas: [
					{
						id: uuid(),
						name: 'Absolut',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 8,
							botella: 60,
						},
						imagen: '/img/bebidas/38.webp',
					},
					{
						id: uuid(),
						name: 'Eristoff Black',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 8,
							botella: 60,
						},
						imagen: '/img/bebidas/39.webp',
					},
					{
						id: uuid(),
						name: 'Ciroc',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/40.webp',
					},
					{
						id: uuid(),
						name: 'Grey Goose',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/60.webp',
					},
					{
						id: uuid(),
						name: 'Ciroc Sabores',
						compuesto: [],
						sabores: ['Piña', 'Melocotón', 'Coco'],
						precios: {
							chupito: 'No Disponible',
							cubata: 'No Disponible',
							botella: 80,
						},
						imagen: '/img/bebidas/41.webp',
					},
				],
			},
			{
				directory: 'Ron',
				bebibas: [
					{
						id: uuid(),
						name: 'Bacardi',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/42.webp',
					},
					{
						id: uuid(),
						name: 'Brugal',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/43.webp',
					},
					{
						id: uuid(),
						name: 'Barceló',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/44.webp',
					},
					{
						id: uuid(),
						name: 'Havana 7',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/45.webp',
					},
					{
						id: uuid(),
						name: 'Kraken',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/46.webp',
					},
				],
			},
			{
				directory: 'Ginebra',
				bebibas: [
					{
						id: uuid(),
						name: 'Beefeater',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/47.webp',
					},
					{
						id: uuid(),
						name: 'Seagrams',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/48.webp',
					},
					{
						id: uuid(),
						name: 'Puerto de indias fresa',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/49.webp',
					},
					{
						id: uuid(),
						name: 'Puerto de indias mora',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/50.webp',
					},
					{
						id: uuid(),
						name: 'Bombay Saphire',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/51.webp',
					},
					{
						id: uuid(),
						name: 'Hendricks',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 4,
							cubata: 9,
							botella: 80,
						},
						imagen: '/img/bebidas/52.webp',
					},
				],
			},
			{
				directory: 'Licores',
				bebibas: [
					{
						id: uuid(),
						name: 'Licor 43',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/53.webp',
					},
					{
						id: uuid(),
						name: 'Bayleis',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/54.webp',
					},
					{
						id: uuid(),
						name: 'Jagger',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/55.webp',
					},
					{
						id: uuid(),
						name: 'Fireball',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/56.webp',
					},
					{
						id: uuid(),
						name: 'Aguardiente',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/57.webp',
					},
					{
						id: uuid(),
						name: 'Tequila de fresa',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/58.webp',
					},
					{
						id: uuid(),
						name: 'José Cuervo',
						compuesto: [],
						sabores: [],
						precios: {
							chupito: 3,
							cubata: 7,
							botella: 60,
						},
						imagen: '/img/bebidas/59.webp',
					},
				],
			},
		],
	},
	//Echo
	{
		id: 4,
		icon: '/icons/refresco.png',
		name: 'Refrescos',
		contenido: [
			{
				id: uuid(),
				name: 'Agua',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/16.webp',
			},
			{
				id: uuid(),
				name: 'Coca cola',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/17.webp',
			},
			{
				id: uuid(),
				name: 'Coca cola zero',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/18.webp',
			},
			{
				id: uuid(),
				name: 'Fanta naranja',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/19.webp',
			},
			{
				id: uuid(),
				name: 'Fanta limón',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/20.webp',
			},
			{
				id: uuid(),
				name: 'Sprite',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/21.webp',
			},
			{
				id: uuid(),
				name: 'Tónica',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 3,
				},
				imagen: '/img/bebidas/22.webp',
			},
			{
				id: uuid(),
				name: 'Red bull',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 4,
				},
				imagen: '/img/bebidas/23.webp',
			},
		],
	},
	//Echo
	{
		id: 5,
		icon: '/icons/cerveza.png',
		name: 'Cervezas',
		contenido: [
			{
				id: uuid(),
				name: 'Coronita',
				compuesto: [],
				sabores: [],
				precios: {
					Unidad: 4,
					Cubo: 20,
				},
				imagen: '/img/bebidas/24.webp',
			},
			{
				id: uuid(),
				name: 'Alhambra',
				compuesto: [],
				sabores: [],
				precios: {
					Unidad: 4,
					Cubo: 20,
				},
				imagen: '/img/bebidas/25.webp',
			},
			{
				id: uuid(),
				name: 'Budweiser',
				compuesto: [],
				sabores: [],
				precios: {
					Unidad: 4,
					Cubo: 20,
				},
				imagen: '/img/bebidas/26.webp',
			},
		],
	},
	//Echo
	{
		id: 7,
		icon: '/icons/snack.png',
		name: 'Pica Pica',
		contenido: [
			{
				id: uuid(),
				name: 'Gofre',
				compuesto: ['Con 1 bola de helado y un sirope a elegir'],
				sabores: ['Topping extra 1€'],
				precios: {
					precio: 4,
				},
				imagen: '/img/bebidas/30.webp',
			},
			{
				id: uuid(),
				name: 'Milkshake Oreo',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 6,
				},
				imagen: '/img/bebidas/27.webp',
			},
			{
				id: uuid(),
				name: 'Milkshake fresa',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 6,
				},
				imagen: '/img/bebidas/28.webp',
			},
			{
				id: uuid(),
				name: 'Milkshake capucchino',
				compuesto: [],
				sabores: [],
				precios: {
					precio: 6,
				},
				imagen: '/img/bebidas/29.webp',
			},
		],
	},
	//Echo
	{
		id: 6,
		icon: '/icons/shisha.png',
		name: 'Shishas',
		contenido: [
			{
				id: uuid(),
				name: 'Love 66',
				compuesto: ['Maracuyá', 'Melón', 'Menta', 'Sandia'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Mi amor',
				compuesto: ['Piña, Plátano, Hielo'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Lady Killer',
				compuesto: ['Melón, Mango, Menta, Frutos del bosque'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Mambo',
				compuesto: ['Fresa, kiwi, melocotón y coco'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Hawai',
				compuesto: ['Piña, Mango y Menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'ChaoBella',
				compuesto: ['Fresa'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Blue Mix',
				compuesto: ['Frutos del bosque'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Menta',
				compuesto: [],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Big Boy',
				compuesto: ['Sandía, menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'BubblenCiaga',
				compuesto: ['Chicle de fresa'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Eskimo Lemon',
				compuesto: ['Lima, Limón, menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Dancing Queen',
				compuesto: ['Vainilla, menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Moon dream',
				compuesto: ['Vainilla, canela y menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'White Cake',
				compuesto: ['Tarta de queso con caramelo'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'WTF',
				compuesto: ['Miel'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Kafayayo',
				compuesto: ['Bombón de coco'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Dead Sea',
				compuesto: ['Coca-Cola y Cereza con toque helado'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Dive',
				compuesto: ['Melón mentolado'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'Carnival',
				compuesto: ['Mezcla de Frutas Exoticas'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
			{
				id: uuid(),
				name: 'French Kiss',
				compuesto: ['Uva, menta'],
				sabores: ['Recambio de cabeza: 5€'],
				precios: {
					precio: 15,
				},
				imagen: '',
			},
		],
	},
];
