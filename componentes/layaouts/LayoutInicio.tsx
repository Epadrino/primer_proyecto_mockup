import Head from 'next/head';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import {
	ButtondeIdioma,
	Contenedor,
	ContenedorDeLogo,
	ContenedorDeTexto,
	ContenedorIdioma,
	Idioma,
	ImagenEscritorio,
	ImagenTlf,
	TextodeAbajo,
} from './StyledLayouts';

interface Props {
	title?: string;
	description?: string;
}
export const LayoutInicio: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Contenedor>
			<Head>
				<title>{title || 'Logo Mockup'}</title>
				<meta
					name='description'
					content={`${
						description ||
						'Vive la mejor experiencia y obtén los mejores resulados.'
					}`}
				/>
				<link rel='ico' href='/images/logo/logo_mockup.png' />
			</Head>
			<ContenedorIdioma>
				<Image
					src='/images/iconos/mundo.png'
					alt='Cargando Logo'
					width={19.17}
					height={19.17}
				/>
				<Idioma>ESP</Idioma>
				<ButtondeIdioma>
					<Image
						src='/images/iconos/flecha_de_idioma.png'
						alt='Cargando Logo'
						width={17.06}
						height={9.3}
					/>
				</ButtondeIdioma>
			</ContenedorIdioma>
			<ContenedorDeLogo>
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
			</ContenedorDeLogo>
			<div>{children}</div>
			<ContenedorDeTexto>
				<TextodeAbajo>
					Vive la mejor experiencia y obtén los mejores resulados.
				</TextodeAbajo>
			</ContenedorDeTexto>
		</Contenedor>
	);
};
