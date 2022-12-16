import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import {
	ContenedordeInputUsuario,
	ContenedorIconCheck,
	InputDeUsuario,
} from './StyledInputs';

export const InputUsuario = () => {
	return (
		<ContenedordeInputUsuario>
			<InputDeUsuario
				type='text'
				placeholder='Crea un nombre de usuario'
			/>
			<ContenedorIconCheck>
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
			</ContenedorIconCheck>
		</ContenedordeInputUsuario>
	);
};
