import {
	BotonAccion,
	BotonMonedaEscr,
	BotonMonedaTlf,
} from '../componentes/botones';
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
					<BotonMonedaEscr
						src={'/images/iconos/icon_TETHER.png'}
						width={35}
						height={35}
						text={'BUSD'}
					/>
					<BotonMonedaTlf
						src={'/images/iconos/icon_TETHER.png'}
						width={26}
						height={26}
						text={'BUSD'}
					/>
					<BotonMonedaEscr
						src={'/images/iconos/icon_BUSD.png'}
						width={34}
						height={34}
						text={'BUSD'}
					/>
					<BotonMonedaTlf
						src={'/images/iconos/icon_BUSD.png'}
						width={26}
						height={26}
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
