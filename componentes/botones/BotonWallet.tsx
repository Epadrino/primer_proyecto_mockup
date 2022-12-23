import Image from 'next/image';
import { ImagenEscritorio, ImagenTlf } from '../layaouts/StyledLayouts';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const BotonDeWallet = styled.button`
	display: flex;
	align-items: center;

	background: ${(props) => props.theme.backgrounds.tertiary};
	color: ${(props) => props.theme.colors.primary};
	border-radius: 50px;

	@media ${device.mobileXS} {
		width: 277px;
		height: 54px;
		font-size: 12px;
		line-height: 14px;
		margin-top: 16px;
	}
	@media ${device.tablet} {
		width: 525px;
		height: 91px;
		font-size: 24px;
		margin-top: 31px;
	}
`;

const FondodeIcono = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-radius: 50px;

	@media ${device.mobileXS} {
		max-width: 41px;
		max-height: 41px;
		min-width: 41px;
		min-height: 41px;
	}
	@media ${device.tablet} {
		max-width: 75px;
		max-height: 75px;
		min-width: 75px;
		min-height: 75px;
	}
`;

const Texto = styled.h1`
	flex-basis: 100%;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		padding: 10px;
	}
	@media ${device.tablet} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
		font-size: 24px;
		text-align: center;
		padding: 0px;
	}
`;

export const BotonWallet = () => {
	return (
		<BotonDeWallet>
			<FondodeIcono>
				<ImagenTlf>
					<Image
						src='/images/iconos/wallet_connect.png'
						alt='Cargando Logo'
						width={34}
						height={34}
					/>
				</ImagenTlf>
				<ImagenEscritorio>
					<Image
						src='/images/iconos/wallet_connect.png'
						alt='Cargando Logo'
						width={61}
						height={61}
					/>
				</ImagenEscritorio>
			</FondodeIcono>
			<Texto>Connect with MetaMask</Texto>
		</BotonDeWallet>
	);
};
