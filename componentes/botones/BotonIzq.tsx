import Image from 'next/image';
import styled from 'styled-components';

const BotonDeIqz = styled.button`
	background: transparent;
	border: none;
	padding: 0;
`;
export const BotonIzq = () => {
	return (
		<BotonDeIqz>
			<Image
				src='/images/iconos/icon_izq.png'
				alt='Image'
				width={46}
				height={46}
			/>
		</BotonDeIqz>
	);
};
