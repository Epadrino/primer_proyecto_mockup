import { useEffect, useState } from 'react';

import { BotonAccion, BotonMoneda } from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeBotones2,
	ContenedorDeMuestra,
	ContenedorItem,
	Item,
	Parrafo,
	TituloDos,
	TituloUno,
} from '../styles/pagar/StyledPagar';

export default function Pagar() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	function getWindowSize() {
		const { innerWidth, innerHeight } = global;
		return { innerWidth, innerHeight };
	}
	return (
		<LayoutDentro title='Pagar'>
			<Contenedor>
				<ContenedorDeMuestra>producto</ContenedorDeMuestra>
				<TituloUno>¡Genial!</TituloUno>
				<Parrafo>
					Ahora solo queda procesar tu pago, selecciona la moneda con
					la que deseas realizar tu pago y ten en cuenta lo siguiente:
				</Parrafo>
				<ContenedorItem>
					<Item>
						Debes contar con BUSD (BEP20) y USDT (BEP20) para pagar
						el paquete. Adicional debes tener BNB (BEP20) para pagar
						el GAS FEE
					</Item>
					<Item>
						Adicional debes tener BNB (BEP20) para pagar el GAS FEE
					</Item>
				</ContenedorItem>
				<TituloDos>Valor a pagar: 200 USD</TituloDos>
				<ContenedorDeBotones>
					<BotonMoneda
						src={'/images/iconos/icon_TETHER.png'}
						width={windowSize.innerWidth > 768 ? 35 : 26}
						height={windowSize.innerWidth > 768 ? 35 : 26}
						text={'BUSD'}
					/>
					<BotonMoneda
						src={'/images/iconos/icon_BUSD.png'}
						width={windowSize.innerWidth > 768 ? 35 : 26}
						height={windowSize.innerWidth > 768 ? 35 : 26}
						text={'BUSD'}
					/>
				</ContenedorDeBotones>
				<ContenedorDeBotones2>
					<BotonAccion text='Ir a mi Pagar' />
					<BotonAccion text='Ver detalles' />
				</ContenedorDeBotones2>
			</Contenedor>
		</LayoutDentro>
	);
}
