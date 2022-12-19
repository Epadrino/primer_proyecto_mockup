import Image from 'next/image';
import { FC } from 'react';
import { BotonDeMenuTlf } from './StyledBotones';

interface Props {
	onClick: () => void;
}
export const BotonMenuTlf: FC<Props> = ({ onClick }) => {
	return (
		<BotonDeMenuTlf onClick={onClick}>
			<Image
				src='/images/iconos/icon_menu.png'
				alt='Image'
				width={33}
				height={33}
			/>
		</BotonDeMenuTlf>
	);
};
