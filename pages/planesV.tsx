import { BotonAccion } from '../componentes/botones';
import { LayoutDentro } from '../componentes/layaouts';
import { Carga } from '../componentes/mensajes';
import { Productos } from '../componentes/productos';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeTexto,
	ContenedorIzq,
	Parrafo,
	Titulo,
} from '../styles/planesV/StyledPlanesV';

export default function PlanesV() {
	return (
		<LayoutDentro title='PlanesV'>
			<Contenedor>
				<ContenedorIzq>
					<ContenedorDeTexto>
						<Titulo>NOMBRE TARJETA</Titulo>
						<Titulo>200 USD</Titulo>
						<Parrafo>
							"Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.”
						</Parrafo>
					</ContenedorDeTexto>
				</ContenedorIzq>
				<ContenedorDeBotones>
					<BotonAccion text='Ir a mi Pagar' />
					<BotonAccion text='Ver detalles' />
				</ContenedorDeBotones>
				<Productos />
			</Contenedor>
		</LayoutDentro>
	);
}
