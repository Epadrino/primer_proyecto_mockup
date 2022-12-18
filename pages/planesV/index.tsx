import { LayoutDentro } from '../../componentes/layaouts';
import { Contenedor, ContenedorDer, ContenedorIzq } from './StyledPlanesV';

export default function PlanesV() {
	return (
		<LayoutDentro title='PlanesV'>
			<Contenedor>
				<ContenedorIzq>
					<h1>NOMBRE TARJETA</h1>
					<h1>200 USD</h1>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.”
					</p>
					<div>
						<button>Ir a pagar</button>
						<button>Ver detalles</button>
					</div>
				</ContenedorIzq>
				<ContenedorDer></ContenedorDer>
			</Contenedor>
		</LayoutDentro>
	);
}
