import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import { BotonDeWallet, FondodeIcono, Texto } from './StyledBotones';

export const BotonWallet = () => {
	return (
		<BotonDeWallet>
			<FondodeIcono>
				<ImagenTlf>
					<Image
						src='/images/iconos/wallet_connect.png'
						alt='Cargando Logo'
						width={34}
						height={34}
					/>
				</ImagenTlf>
				<ImagenEscritorio>
					<Image
						src='/images/iconos/wallet_connect.png'
						alt='Cargando Logo'
						width={61}
						height={61}
					/>
				</ImagenEscritorio>
			</FondodeIcono>
			<Texto>Connect with MetaMask</Texto>
		</BotonDeWallet>
	);
};
