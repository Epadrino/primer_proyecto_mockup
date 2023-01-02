import Image from 'next/image';

import { BotonWallet } from '../componentes/botones';
import { LayoutInicio } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorBoton,
	ContenedorUno,
	TituloWalled,
	ContenedorTexto,
	Metamask,
	WalletConnect,
} from '../styles/wallet/StyledWalled';

export default function Wallet() {
	return (
		<LayoutInicio title='Wallet'>
			<Contenedor>
				<ContenedorUno>
					<div>
						<Image
							src='/images/logo/logo_mockup.png'
							alt='Cargando Logo'
							fill
						/>
					</div>
				</ContenedorUno>
				<ContenedorTexto>
					<TituloWalled>Conecta tu Wallet.</TituloWalled>
				</ContenedorTexto>
				<ContenedorBoton>
					<BotonWallet text='Connect with MetaMask'>
						<Metamask>
							<Image
								src='/images/iconos/Metamask.png'
								alt='Img'
								fill
							/>
						</Metamask>
					</BotonWallet>
					<BotonWallet text='Connect with MetaMask'>
						<WalletConnect>
							<Image
								src='/images/iconos/wallet_connect.png'
								alt='Img'
								fill
							/>
						</WalletConnect>
					</BotonWallet>
				</ContenedorBoton>
			</Contenedor>
		</LayoutInicio>
	);
}
