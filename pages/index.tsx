import Image from 'next/image';
import { BotonAccion } from '../componentes/botones';
import { Input } from '../componentes/inputs';
import { LayoutInicio } from '../componentes/layaouts';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../componentes/layaouts/StyledLayouts';
import {
	Contenedor,
	ContenedorIcon,
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
							alt='Imagen'
							width={159}
							height={161}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Imagen'
							width={348}
							height={351}
						/>
					</ImagenEscritorio>
				</ContenedorUno>
				<ContenedorDos>
					<Contenedor>
						<Input placeholder={'Código de Referido'} />
						<ContenedorIcon>
							<ImagenTlf>
								<Image
									src='/images/iconos/info-circle.png'
									alt='Cargando Logo'
									width={21}
									height={21}
								/>
							</ImagenTlf>
							<ImagenEscritorio>
								<Image
									src='/images/iconos/info-circle.png'
									alt='Cargando Logo'
									width={32}
									height={32}
								/>
							</ImagenEscritorio>
						</ContenedorIcon>
					</Contenedor>
					<ContenedorDeBotones>
						<BotonAccion text='Continuar' />
						<BotonAccion text='Ya tengo cuenta' />
					</ContenedorDeBotones>
				</ContenedorDos>
			</ContenedorCuerpo>
		</LayoutInicio>
	);
}
