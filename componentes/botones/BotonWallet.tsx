import Image from 'next/image';
import styled from 'styled-components';
import { device } from '../../utils/devices';
import { FC } from 'react';

const BotonDeWallet = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
	background: ${(props) => props.theme.backgrounds.tertiary};
	color: ${(props) => props.theme.colors.primary};
	border-radius: 50px;
	&:hover {
		&:hover {
			background: ${(props) => props.theme.backgrounds.secondary};
		}
	}

	@media ${device.mobileXS} {
		width: 277px;
		height: 54px;
		font-size: 12px;
		line-height: 14px;
	}
	@media ${device.tablet} {
		width: 525px;
		height: 70px;
		font-size: 24px;
	}
`;

const FondodeIcono = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff;
	border-radius: 50px;

	@media ${device.mobileXS} {
		width: 50px;
		height: 40px;
	}
	@media ${device.tablet} {
		width: 65px;
		height: 55px;
	}
`;

const Texto = styled.h1`
	flex-basis: 100%;

	color: ${(props) => props.theme.colors.primary};
	&:hover {
		color: ${(props) => props.theme.colors.tertiary};
	}
	@media ${device.mobileXS} {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 700;
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
interface Props {
	src: string;
	width: number;
	height: number;
}
export const BotonWallet: FC<Props> = ({ src, width, height }) => {
	return (
		<BotonDeWallet>
			<FondodeIcono>
				<Image
					src={src}
					alt='Cargando Logo'
					width={width}
					height={height}
				/>
			</FondodeIcono>
			<Texto>Connect with MetaMask</Texto>
		</BotonDeWallet>
	);
};
