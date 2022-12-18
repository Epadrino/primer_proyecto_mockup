import Image from 'next/image';
import { FC } from 'react';
import { BotonDeX } from './StyledBotones';

interface Props {
	onClick: any;
}

export const BotonX: FC<Props> = ({ onClick }) => {
	return (
		<BotonDeX onClick={onClick}>
			<Image
				src='/images/iconos/icon_x.png'
				alt='Image'
				width={31}
				height={31}
			/>
		</BotonDeX>
	);
};
