import Image from 'next/image';
import styled from 'styled-components';

const BotonDeSalir = styled.button`
	background: transparent;
	border: none;
	padding: 0;
`;

export const BotonSalir = () => {
	return (
		<BotonDeSalir>
			<Image
				src='/images/iconos/log_in.png'
				alt='Image'
				width={33}
				height={33}
			/>
		</BotonDeSalir>
	);
};
