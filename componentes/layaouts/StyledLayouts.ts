import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: initial;
	align-items: center;
	align-content: space-between;
	height: 1024px;

	@media ${device.mobileXS} {
		heigth: 800px;
	}
	@media ${device.tablet} {
		heigth: 1024px;
	}
`;

export const ContenedorIdioma = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	align-content: space-between;

	width: 100%;

	@media ${device.mobileXS} {
		margin-bottom: 85px;
	}
	@media ${device.tablet} {
		margin-top: 43px;
		margin-bottom: 0px;
	}
`;

export const Idioma = styled.h2`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Arial';
	font-weight: 700;
	text-align: center;
	letter-spacing: 0px;

	@media ${device.mobileXS} {
		font-size: 13px;
		line-height: 14.95px;
		margin-right: 1px;
		margin-left: 7px;
	}
	@media ${device.tablet} {
		font-size: 16px;
		line-height: 19px;
		margin-right: 1px;
		margin-left: 9px;
	}
`;

export const ButtondeIdioma = styled.button`
	background-color: transparent;
	border-radius: 0px;
	border: 0px;

	@media ${device.mobileXS} {
		margin-right: 39.65px;
	}
	@media ${device.tablet} {
		margin-right: 74px;
	}
`;

export const ContenedorDeLogo = styled.div`
	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;

export const ImagenTlf = styled.div`
	@media ${device.mobileXS} {
		display: contents;
	}
	@media ${device.tablet} {
		display: none;
	}
`;

export const ImagenEscritorio = styled.div`
	@media ${device.mobileXS} {
		display: none;
	}
	@media ${device.tablet} {
		display: contents;
	}
`;
export const TextodeAbajo = styled.p`
	color: ${(props) => props.theme.colors.primary};
	text-align: center;
	@media ${device.mobileXS} {
		font-size: 18px;
		line-height: 15px;
		margin-bottom: 95px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 30px;
		margin-bottom: 120px;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Kallisto';
	font-weight: 700;
	font-style: normal;

	@media ${device.mobileXS} {
		width: 300px;
	}
	@media ${device.tablet} {
		width: 518px;
	}
`;
