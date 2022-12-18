import Head from 'next/head';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { EnlacePieDePagina } from '../enlaces';
import { Menu, MenuDeslizante } from '../menu';

import {
	RedSocialDiscord,
	RedSocialFacebook,
	RedSocialGmail,
	RedSocialInstagram,
	RedSocialTwitter,
} from '../redesSociales';
import {
	ContenedorMenuEsc,
	Cabezera,
	ContenedorDeLogo,
	ContenedorLayout,
	ContenedorRedesSociales,
	PieDePagina,
	Titulo,
	ContenedorIzq,
	ContenedorDer,
	ContenedorTextosUno,
	ContenedorTextosDos,
	Separador,
	ContenedorTextoUnoYDos,
	TextoRedes,
	ContenedorDeMenu,
} from './StyledLayoutDentro';
import { ImagenEscritorio, ImagenTlf } from './StyledLayouts';

interface Props {
	title?: string;
	description?: string;
}

export const LayoutDentro: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	description,
}) => {
	return (
		<ContenedorLayout>
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
			<Cabezera>
				<ContenedorDeLogo>
					<ImagenTlf>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={38}
							height={38}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							width={78}
							height={78}
						/>
					</ImagenEscritorio>
					<Titulo>LOGO MOCKUP</Titulo>
				</ContenedorDeLogo>
				<ContenedorDeMenu>
					<ContenedorMenuEsc>
						<Menu />
					</ContenedorMenuEsc>
					<MenuDeslizante />
				</ContenedorDeMenu>
			</Cabezera>
			{children}
			<PieDePagina>
				<ContenedorIzq>
					<Image
						src='/images/logo/logo_mockup.png'
						alt='Cargando Logo'
						width={78}
						height={78}
					/>
					<ContenedorTextoUnoYDos>
						<ContenedorTextosUno>
							<EnlacePieDePagina href='' text='Compañía' />
							<EnlacePieDePagina href='' text='Sobre nosotros' />
							<EnlacePieDePagina href='' text='Contáctenos' />
						</ContenedorTextosUno>
						<ContenedorTextosDos>
							<EnlacePieDePagina
								href=''
								text='Politica de Privacidad'
							/>
							<Separador />
							<EnlacePieDePagina
								href=''
								text='Terminos y condiciones'
							/>
						</ContenedorTextosDos>
					</ContenedorTextoUnoYDos>
				</ContenedorIzq>
				<ContenedorDer>
					<TextoRedes>Únete a la comunidad</TextoRedes>
					<ContenedorRedesSociales>
						<RedSocialDiscord href='' />
						<RedSocialFacebook href='' />
						<RedSocialGmail href='' />
						<RedSocialInstagram href='' />
						<RedSocialTwitter href='' />
					</ContenedorRedesSociales>
				</ContenedorDer>
			</PieDePagina>
		</ContenedorLayout>
	);
};
