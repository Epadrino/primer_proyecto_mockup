import Image from 'next/image';
import { BotonDeAbajo } from './StyledBotones';

export const BotonAbajo = () => {
	return (
		<BotonDeAbajo>
			<Image
				src='/images/iconos/icon_abajo.png'
				alt='Image'
				width={46}
				height={46}
			/>
		</BotonDeAbajo>
	);
};
