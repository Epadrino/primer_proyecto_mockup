import React, { useEffect, useState } from 'react';

import { BotonImagen } from '../botones';
import { EnlaceMenu } from '../enlaces';
import { Idioma } from '../idiomas';
import {
	ContenedorDeBoton,
	ContenedorDeEnlaces,
	ContenedorSalir,
	Separador,
	Texto,
} from './StyledMenu';

export const Menu = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	function getWindowSize() {
		const { innerWidth, innerHeight } = global;
		return { innerWidth, innerHeight };
	}

	return (
		<>
			<ContenedorDeEnlaces>
				<EnlaceMenu text='Mi página' href='' />
				<EnlaceMenu text='Soporte' href='' />
			</ContenedorDeEnlaces>
			<Separador />
			<ContenedorDeBoton>
				<Idioma />
				<ContenedorSalir>
					<BotonImagen
						src='/images/iconos/log_in.png'
						width={windowSize.innerWidth > 768 ? 33 : 25}
						height={windowSize.innerWidth > 768 ? 33 : 25}
					/>
					<Texto>salir</Texto>
				</ContenedorSalir>
			</ContenedorDeBoton>
		</>
	);
};
