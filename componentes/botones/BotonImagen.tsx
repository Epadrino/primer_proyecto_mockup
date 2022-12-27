import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

const Boton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
`;

interface Props {
	text?: string;
	src?: string;
	width?: number;
	height?: number;
	onClick?: () => void;
}

export const BotonImagen: FC<Props> = ({
	text,
	width,
	height,
	onClick,
	src,
}) => {
	return (
		<Boton onClick={onClick}>
			<Image src={src} alt='Image' width={width} height={height} />
			{text}
		</Boton>
	);
};
