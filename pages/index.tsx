import Image from 'next/image';

import { useEffect, useState } from 'react';

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
		<LayoutInicio title='Referido'>
			<ContenedorCuerpo>
				<ContenedorUno>
					<Image
						src='/images/logo/logo_mockup.png'
						alt='Imagen'
						width={windowSize.innerWidth > 768 ? 348 : 159}
						height={windowSize.innerWidth > 768 ? 351 : 161}
					/>
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
