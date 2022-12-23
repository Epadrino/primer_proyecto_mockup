import {
	BotonDer,
	BotonIrAPagar,
	BotonIzq,
	BotonVerDetalles,
} from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeFlecha,
	ContenedorDeProductos,
	ContenedorDer,
	ContenedorDeTextos,
	ContenedorIzq,
	Productos,
	TextoDeTarjetas,
	Titulo,
} from '../styles/planesV2/StyledPlanesV2';

export default function PlanesV2() {
	return (
		<LayoutDentro title='PlanesV2'>
			<Contenedor>
				<ContenedorIzq>
					<Titulo>Selecciona tu paquete</Titulo>
				</ContenedorIzq>
				<ContenedorDer>
					<ContenedorDeProductos>
						<ContenedorDeFlecha>
							<BotonIzq />
						</ContenedorDeFlecha>
						<Productos>
							<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
							<TextoDeTarjetas>200 USD</TextoDeTarjetas>
						</Productos>
						<Productos>
							<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
							<TextoDeTarjetas>200 USD</TextoDeTarjetas>
						</Productos>
						<Productos>
							<TextoDeTarjetas>NOMBRE TARJETA</TextoDeTarjetas>
							<TextoDeTarjetas>200 USD</TextoDeTarjetas>
						</Productos>
						<ContenedorDeFlecha>
							<BotonDer />
						</ContenedorDeFlecha>
					</ContenedorDeProductos>
				</ContenedorDer>
				<ContenedorDeTextos>
					<Titulo>NOMBRE TARJETA</Titulo>
					<Titulo>200 USD</Titulo>
				</ContenedorDeTextos>
				<ContenedorDeBotones>
					<BotonIrAPagar />
					<BotonVerDetalles />
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutDentro>
	);
}
