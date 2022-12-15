import Image from 'next/image';
import { BotonYaTengoCuenta, BotonContinuar } from '../../componentes/botones';
import { LayoutInicio } from '../../componentes/layaouts';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../../componentes/layaouts/StyledLayouts';
import {
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
					<BotonContinuar />
					<BotonYaTengoCuenta />
				</ContenedorDeBotones>
			</Contenedor>
		</LayoutInicio>
	);
}
