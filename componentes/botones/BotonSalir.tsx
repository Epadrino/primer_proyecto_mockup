import Image from 'next/image';
import { BotonDeSalir } from './StyledBotones';

export const BotonSalir = () => {
	return (
		<BotonDeSalir>
			<Image
				src='/images/iconos/log_in.png'
				alt='Image'
				width={33}
				height={33}
			/>
		</BotonDeSalir>
	);
};
