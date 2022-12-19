import Image from 'next/image';
import { BotonDeArriba } from './StyledBotones';

export const BotonArriba = () => {
	return (
		<BotonDeArriba>
			<Image
				src='/images/iconos/icon_arriba.png'
				alt='Image'
				width={46}
				height={46}
			/>
		</BotonDeArriba>
	);
};
