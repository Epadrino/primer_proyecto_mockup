import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import {
	ContenedordeImput,
	ContenedorInfoIcon,
	InputDeCodigo,
} from './StyledInputs';

export const InputCodigo = () => {
	return (
		<ContenedordeImput>
			<InputDeCodigo type='text' placeholder='Código de referido' />
			<ContenedorInfoIcon>
				<ImagenTlf>
					<Image
						src='/images/iconos/info-circle.png'
						alt='Cargando Logo'
						width={19}
						height={19}
					/>
				</ImagenTlf>
				<ImagenEscritorio>
					<Image
						src='/images/iconos/info-circle.png'
						alt='Cargando Logo'
						width={33.29}
						height={33.29}
					/>
				</ImagenEscritorio>
			</ContenedorInfoIcon>
		</ContenedordeImput>
	);
};
