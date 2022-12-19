import {
	BotonAbajo,
	BotonArriba,
	BotonIrAPagar,
	BotonVerDetalles,
} from '../../componentes/botones';
import { LayoutDentro } from '../../componentes/layaouts';
import {
	Contenedor,
	ContenedorDeBotones,
	ContenedorDeFlecha,
	ContenedorDeMuestra,
	ContenedorDeProductos,
	ContenedorDer,
	ContenedorIzq,
	Parrafo,
	Productos,
	Titulo,
} from './StyledPlanesV';

export default function PlanesV() {
	return (
		<LayoutDentro title='PlanesV'>
			<Contenedor>
				<ContenedorIzq>
					<Titulo>NOMBRE TARJETA</Titulo>
					<Titulo>200 USD</Titulo>
					<Parrafo>
						"Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.”
					</Parrafo>
				</ContenedorIzq>
				<ContenedorDeBotones>
					<BotonIrAPagar />
					<BotonVerDetalles />
				</ContenedorDeBotones>
				<ContenedorDer>
					<ContenedorDeMuestra>producto</ContenedorDeMuestra>
					<ContenedorDeProductos>
						<ContenedorDeFlecha>
							<BotonArriba />
						</ContenedorDeFlecha>
						<Productos>productos</Productos>
						<Productos>productos</Productos>
						<Productos>productos</Productos>
						<ContenedorDeFlecha>
							<BotonAbajo />
						</ContenedorDeFlecha>
					</ContenedorDeProductos>
				</ContenedorDer>
			</Contenedor>
		</LayoutDentro>
	);
}
