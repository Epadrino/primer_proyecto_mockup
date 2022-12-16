import styled from 'styled-components';
import { device } from '../../utils/devices';

export const ButtonContinuar = styled.button`
	font-family: 'kallisto';
	font-weight: 700;
	background: transparent;
	border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-radius: 5px;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		background: ${(props) => props.theme.backgrounds.secondary};
		color: ${(props) => props.theme.colors.tertiary};
	}
	@media ${device.mobileXS} {
		height: 33px;
		width: 118px;
		border-radius: 3px;
		font-size: 12px;
		line-height: 14px;
	}
	@media ${device.tablet} {
		height: 66px;
		width: 217px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const ButtonYaTengoCuenta = styled.button`
	font-family: 'kallisto';
	font-weight: 700;
	background: transparent;
	border: 2px solid ${(props) => props.theme.backgrounds.secondary};
	border-radius: 5px;
	color: ${(props) => props.theme.colors.secondary};
	&:hover {
		background: ${(props) => props.theme.backgrounds.secondary};
		color: ${(props) => props.theme.colors.tertiary};
	}
	@media ${device.mobileXS} {
		height: 33px;
		width: 151px;
		border-radius: 3px;
		font-size: 12px;
		line-height: 14px;
	}
	@media ${device.tablet} {
		height: 66px;
		width: 258px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 24px;
	}
`;

export const ButtonMetaMask = styled.button`
	display: flex;
	align-items: center;
	font-family: 'kallisto';
	font-weight: 700;

	background: ${(props) => props.theme.backgrounds.tertiary};
	color: ${(props) => props.theme.colors.primary};
	border-radius: 50px;

	@media ${device.mobileXS} {
		width: 277px;
		height: 54px;
		font-size: 12px;
		line-height: 14px;
	}
	@media ${device.tablet} {
		width: 525px;
		height: 91px;
		font-size: 24px;
	}
`;

export const BotonDeSalir = styled.button`
	background: transparent;
	border: none;
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const ButtonWallet = styled.button`
	display: flex;
	align-items: center;
	font-family: 'kallisto';
	font-weight: 700;

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
export const ContenedorDeIcono = styled.div`
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
export const FondodeIcono = styled.div`
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
export const Texto = styled.h1`
	flex-basis: 100%;

	color: ${(props) => props.theme.colors.primary};

	@media ${device.mobileXS} {
		font-family: 'Abel';
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		padding: 10px;
	}
	@media ${device.tablet} {
		font-family: 'Kallisto';
		font-weight: 700;
		font-size: 24px;
		text-align: center;
		padding: 0px;
	}
`;
