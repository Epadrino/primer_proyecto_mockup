import Image from 'next/image';

import { useEffect, useState } from 'react';

import { BotonWallet } from '../componentes/botones';
import { LayoutInicio } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorBoton,
	ContenedorUno,
	TituloWalled,
	ContenedorTexto,
} from '../styles/wallet/StyledWalled';

export default function Wallet() {
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
		const { innerWidth } = global;
		return { innerWidth };
	}
	return (
		<LayoutInicio title='Wallet'>
			<Contenedor>
				<ContenedorUno>
					<Image
						src='/images/logo/logo_mockup.png'
						alt='Cargando Logo'
						width={windowSize.innerWidth > 768 ? 296 : 159}
						height={windowSize.innerWidth > 768 ? 299 : 161}
					/>
				</ContenedorUno>
				<ContenedorTexto>
					<TituloWalled>Conecta tu Wallet.</TituloWalled>
				</ContenedorTexto>
				<ContenedorBoton>
					<BotonWallet
						src='/images/iconos/Metamask.png'
						width={windowSize.innerWidth > 768 ? 45 : 30}
						height={windowSize.innerWidth > 768 ? 45 : 30}
					/>
					<BotonWallet
						src='/images/iconos/wallet_connect.png'
						width={windowSize.innerWidth > 768 ? 51 : 31}
						height={windowSize.innerWidth > 768 ? 51 : 31}
					/>
				</ContenedorBoton>
			</Contenedor>
		</LayoutInicio>
	);
}
