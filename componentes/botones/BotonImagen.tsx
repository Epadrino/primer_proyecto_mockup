import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const Boton = styled.button`
	background: ${(props) => props.theme.backgrounds.secondary};
	border-radius: 50px;
	cursor: pointer;
	position: relative;
	width: 40px;
	::after {
		content: '';
		display: block;
	}
	@media ${device.mobileXS} {
		max-height: 40px;
		max-width: 40px;
	}
	@media ${device.tablet} {
		max-height: 40px;
		max-width: 40px;
	}
`;

interface Props {
	text?: string;
	src?: string;
	onClick?: () => void;
}

export const BotonImagen: FC<Props> = ({ text, onClick, src }) => {
	return (
		<Boton onClick={onClick}>
			<Image src={src} alt='Image' width={13} height={26} />
		</Boton>
	);
};
