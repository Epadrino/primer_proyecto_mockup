import React from 'react';
import { BotonAbajo, BotonArriba } from '../botones';
import {
	Contenedor,
	ContenedorBotonAbajo,
	ContenedorBotonArriba,
	ContenedorDeProductos,
	ContenedorDeProductos1,
	ContenedorDeProductos2,
	Producto1,
	Producto2,
} from './StyledProductos';

export const Productos = () => {
	return (
		<Contenedor>
			<ContenedorDeProductos>
				<ContenedorDeProductos1>
					<Producto1 />
				</ContenedorDeProductos1>
				<ContenedorDeProductos2>
					<ContenedorBotonArriba>
						<BotonArriba />
					</ContenedorBotonArriba>
					<Producto2 />
					<Producto2 />
					<Producto2 />
					<ContenedorBotonAbajo>
						<BotonAbajo />
					</ContenedorBotonAbajo>
				</ContenedorDeProductos2>
			</ContenedorDeProductos>
		</Contenedor>
	);
};
