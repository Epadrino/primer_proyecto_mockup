import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeWallet = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	background: transparent;
	color: ${(props) => props.theme.colors.primary};
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.primary};

	&:hover {
		border: 1px solid ${(props) => props.theme.backgrounds.tertiary};
		background: ${(props) => props.theme.backgrounds.secondary};
	}

	@media ${device.mobileXS} {
		width: 105px;
		height: 38px;
		font-size: 12px;
		line-height: 14px;

		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 15px;
	}
	@media ${device.tablet} {
		width: 143px;
		height: 51px;
		font-size: 24px;

		font-family: 'Arial';
		font-size: 20px;
		text-align: center;
		padding: 0px;
	}
`;

export const BotonUsdt = () => {
	return (
		<BotonDeWallet>
			<ImagenTlf>
				<Image
					src='/images/iconos/icon_TETHER.png'
					alt='Cargando Logo'
					width={25}
					height={25}
				/>
			</ImagenTlf>
			<ImagenEscritorio>
				<Image
					src='/images/iconos/icon_TETHER.png'
					alt='Cargando Logo'
					width={41}
					height={39}
				/>
			</ImagenEscritorio>
			USDT
		</BotonDeWallet>
	);
};
