import { BotonMetaMask } from '../componentes/botones/BotonMetaMask';
import { BotonWallet } from '../componentes/botones';
import { LayoutInicio } from '../componentes/layaouts';
import {
	Contenedor,
	ContenedorUno,
	TituloWalled,
} from '../styles/wallet/StyledWalled';
import Image from 'next/image';
import {
	ImagenEscritorio,
	ImagenTlf,
} from '../componentes/layaouts/StyledLayouts';

export default function Wallet() {
	return (
		<LayoutInicio title='Wallet'>
			<Contenedor>
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
							width={296}
							height={299}
						/>
					</ImagenEscritorio>
				</ContenedorUno>
				<TituloWalled>Conecta tu Wallet.</TituloWalled>
				<BotonMetaMask />
				<BotonWallet />
			</Contenedor>
		</LayoutInicio>
	);
}
