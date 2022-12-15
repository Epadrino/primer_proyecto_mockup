import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import {
	ButtonMetaMask,
	ContenedorDeIcono,
	FondodeIcono,
	Texto,
} from './StyledBotones';

export const BotonMetaMask = () => {
	return (
		<ButtonMetaMask>
			<FondodeIcono>
				<ContenedorDeIcono>
					<ImagenTlf>
						<Image
							src='/images/iconos/Metamask.png'
							alt='Cargando Logo'
							width={30.07}
							height={26.55}
						/>
					</ImagenTlf>
					<ImagenEscritorio>
						<Image
							src='/images/iconos/Metamask.png'
							alt='Cargando Logo'
							width={53}
							height={60}
						/>
					</ImagenEscritorio>
				</ContenedorDeIcono>
			</FondodeIcono>
			<Texto>Connect with MetaMask</Texto>
		</ButtonMetaMask>
	);
};
