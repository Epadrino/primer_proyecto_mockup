import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../utils/devices';
import { FC } from 'react';

const Boton = styled.button`
	align-items: center;
	justify-content: space-evenly;

	text-align: left;
	background: transparent;
	color: ${(props) => props.theme.colors.primary};
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.primary};

	&:hover {
		border: 1px solid ${(props) => props.theme.backgrounds.tertiary};
		background: ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
		display: flex;
		width: 105px;
		height: 38px;
		font-size: 12px;
		line-height: 14px;

		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 15px;
	}
	@media ${device.tablet} {
		display: none;
	}
`;
interface Props {
	text?: string;
	src?: string;
	width?: number;
	height?: number;
	onClick?: () => void;
}

export const BotonMonedaTlf: FC<Props> = ({
	text,
	src,
	width,
	height,
	onClick,
}) => {
	return (
		<Boton onClick={onClick}>
			<Image src={src} alt='img' width={width} height={height} />
			{text}
		</Boton>
	);
};
