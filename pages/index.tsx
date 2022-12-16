import { LayoutDentro } from '../componentes/layaouts';

export default function Home() {
	return (
		<LayoutDentro title='Pagina principal'>
			<div>
				<div>
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
				</div>
				<div>{/* componente */}</div>
			</div>
		</LayoutDentro>
	);
}
