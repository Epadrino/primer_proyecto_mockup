import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeAbajo = styled.button`
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
