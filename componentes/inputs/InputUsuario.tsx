import Image from 'next/image';
import { useState } from 'react';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import {
	ContenedordeImput,
	ContenedorInfoIcon,
	InputDeUsuario,
} from './StyledInputs';

export const InputUsuario = () => {
	return (
		<>
			<ContenedordeImput>
				<InputDeUsuario
					type='text'
					placeholder='Crea un nombre de usuario'
				/>
				<ContenedorInfoIcon>
					<ImagenTlf>
						<Image
							src='/images/iconos/Check.png'
							alt='Cargando Logo'
							width={21}
							height={21}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/iconos/Check.png'
							alt='Cargando Logo'
							width={32}
							height={32}
						/>
					</ImagenEscritorio>
				</ContenedorInfoIcon>
			</ContenedordeImput>
		</>
	);
};
