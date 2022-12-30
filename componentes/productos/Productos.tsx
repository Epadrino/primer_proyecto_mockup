import React from 'react';
import { BotonImagen } from '../botones';
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
						<BotonImagen
							src='/images/iconos/icon_arriba.png'
							width={46}
							height={46}
						/>
					</ContenedorBotonArriba>
					<Producto2 />
					<Producto2 />
					<Producto2 />
					<ContenedorBotonAbajo>
						<BotonImagen
							src='/images/iconos/icon_abajo.png'
							width={46}
							height={46}
						/>
					</ContenedorBotonAbajo>
				</ContenedorDeProductos2>
			</ContenedorDeProductos>
		</Contenedor>
	);
};
