import { BotonAccion, BotonImagen } from '../componentes/botones';
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
							<BotonImagen
								src='./images/iconos/icon_izq'
								width={46}
								height={46}
							/>
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
							<BotonImagen
								src='/images/iconos/icon_der.png'
								width={46}
								height={46}
							/>
						</ContenedorDeFlecha>
					</ContenedorDeProductos>
				</ContenedorDer>
				<ContenedorDeTextos>
					<Titulo>NOMBRE TARJETA</Titulo>
					<Titulo>200 USD</Titulo>
				</ContenedorDeTextos>
				<ContenedorDeBotones>
					<BotonAccion text='Ir a Pagar' />
					<BotonAccion text='Ver detalles' />
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutDentro>
	);
}
