import Image from 'next/image';
import styled from 'styled-components';

const BotonDeDer = styled.button`
	background: transparent;
	border: none;
	padding: 0;
`;

export const BotonDer = () => {
	return (
		<BotonDeDer>
			<Image
				src='/images/iconos/icon_der.png'
				alt='Image'
				width={46}
				height={46}
			/>
		</BotonDeDer>
	);
};
