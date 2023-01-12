import Image from 'next/image';
import React from 'react';
import { BotonAccion } from '../botones';
import {
	Caja,
	Contenedor,
	ContenedorMensaje,
	MensajeUno,
} from './StyledMensaje';

export const Creado = () => {
	return (
		<Contenedor>
			<ContenedorMensaje>
				<Caja>
					<Image
						src='/images/iconos/mensaje_checks.png'
						alt='imagen'
						width={175}
						height={175}
					/>
					<MensajeUno>
						Tu cuenta ha sido creada correctamente
					</MensajeUno>
					<BotonAccion text='Continuar' />
				</Caja>
			</ContenedorMensaje>
		</Contenedor>
	);
};
