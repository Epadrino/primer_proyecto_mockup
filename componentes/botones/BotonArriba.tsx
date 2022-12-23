import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeArriba = styled.button`
	background: transparent;
	border: none;
	padding: 0;

	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;

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
