import React from 'react';
import { BotonSalir } from '../botones';
import { EnlaceMenu } from '../enlaces';
import { Idioma } from '../idiomas';
import {
	ContenedorDeBoton,
	ContenedorDeEnlaces,
	Separador,
} from './StyledMenu';

export const Menu = () => {
	return (
		<>
			<ContenedorDeEnlaces>
				<EnlaceMenu text='Mi página' href='' />
				<EnlaceMenu text='Soporte' href='' />
			</ContenedorDeEnlaces>
			<Separador />
			<ContenedorDeBoton>
				<Idioma />
				<BotonSalir />
			</ContenedorDeBoton>
		</>
	);
};
