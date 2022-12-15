import Image from 'next/image';
import { LayoutInicio } from '../../componentes/layaouts';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../../componentes/layaouts/StyledLayouts';
import {
	BotonContinuar,
	BotonYaTengoCuenta,
	Contenedor,
	ContenedorDeBotones,
	ContenedordeImput,
	ContenedorInfoIcon,
	InputCodigo,
} from './StyledReferido';

export default function Referido() {
	return (
		<LayoutInicio>
			<Contenedor>
				<ContenedordeImput>
					<InputCodigo type='text' placeholder='Código de referido' />
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
				<ContenedorDeBotones>
					<BotonContinuar>Continuar</BotonContinuar>
					<BotonYaTengoCuenta>Ya tengo una cuenta</BotonYaTengoCuenta>
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutInicio>
	);
}
