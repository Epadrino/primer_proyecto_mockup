import Head from 'next/head';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { Idioma } from '../idiomas';
import {
	Contenedor,
	ContenedorIdioma,
	ImagenEscritorio,
	ImagenTlf,
} from './StyledLayouts';

interface Props {
	title?: string;
	description?: string;
}
export const LayoutUsuario: FC<PropsWithChildren<Props>> = ({
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
				<Idioma />
			</ContenedorIdioma>
			<>
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
			</>
			{children}
		</Contenedor>
	);
};
