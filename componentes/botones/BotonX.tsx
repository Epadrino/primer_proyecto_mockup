import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

const BotonDeX = styled.button`
	background: transparent;
	border: none;
	padding: 0;
`;

interface Props {
	onClick: () => void;
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
