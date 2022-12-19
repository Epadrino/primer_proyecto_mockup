import {
	BotonDer,
	BotonIrAPagar,
	BotonIzq,
	BotonVerDetalles,
} from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeFlecha,
	ContenedorDeProductos,
	ContenedorDeTextos,
	ContenedorIzq,
	Productos,
	TextoDeTarjetas,
	Titulo,
} from './StyledPlanesV2';

export default function PlanesV2() {
	return (
		<LayoutDentro title='PlanesV2'>
			<Contenedor>
				<ContenedorIzq>
					<Titulo>Selecciona tu paquete</Titulo>
				</ContenedorIzq>
				<ContenedorDeProductos>
					<ContenedorDeFlecha>
						<BotonIzq />
					</ContenedorDeFlecha>
					<Productos>
						<Titulo>NOMBRE TARJETA</Titulo>
						<Titulo>200 USD</Titulo>
					</Productos>
					<ContenedorDeFlecha>
						<BotonDer />
					</ContenedorDeFlecha>
				</ContenedorDeProductos>
				<ContenedorDeTextos>
					<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
					<TextoDeTarjetas>200 USD</TextoDeTarjetas>
				</ContenedorDeTextos>
				<ContenedorDeBotones>
					<BotonIrAPagar />
					<BotonVerDetalles />
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutDentro>
	);
}
