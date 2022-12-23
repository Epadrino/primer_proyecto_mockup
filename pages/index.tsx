import Image from 'next/image';
import { BotonYaTengoCuenta, BotonContinuar } from '../componentes/botones';
import { InputCodigo } from '../componentes/inputs';
import { LayoutInicio } from '../componentes/layaouts';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../componentes/layaouts/StyledLayouts';
import {
	ContenedorUno,
	ContenedorDos,
	ContenedorCuerpo,
	ContenedorDeBotones,
} from '../styles/referido/StyledReferido';

export default function Referido() {
	return (
		<LayoutInicio title='Referido'>
			<ContenedorCuerpo>
				<ContenedorUno>
					<ImagenTlf>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={159}
							height={161}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={348}
							height={351}
						/>
					</ImagenEscritorio>
				</ContenedorUno>
				<ContenedorDos>
					<InputCodigo />
					<ContenedorDeBotones>
						<BotonContinuar />
						<BotonYaTengoCuenta />
					</ContenedorDeBotones>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutInicio>
	);
}
