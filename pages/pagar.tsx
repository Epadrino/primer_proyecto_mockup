import {
	BotonBusd,
	BotonIrAPagar,
	BotonUsdt,
	BotonVerDetalles,
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
					<BotonUsdt />
					<BotonBusd />
				</ContenedorDeBotones>
				<ContenedorDeBotones2>
					<BotonIrAPagar />
					<BotonVerDetalles />
				</ContenedorDeBotones2>
			</Contenedor>
		</LayoutDentro>
	);
}
