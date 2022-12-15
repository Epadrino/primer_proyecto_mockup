import styled from 'styled-components';
import { device } from '../../utils/devices';

export const Contenedor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: space-between;

	background: ${(props) => props.theme.backgrounds.primary};
	width: 100%;

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
	height: 100px;

	@media ${device.mobileXS} {
		margin-bottom: 100px;
	}
	@media ${device.tablet} {
		margin-top: 63px;
		margin-bottom: 0px;
	}
`;

export const Idioma = styled.h2`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Arial';
	font-style: normal;
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
		margin-bottom: 52px;
	}
	@media ${device.tablet} {
		margin-bottom: 69px;
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
		margin-top: 180px;
	}
	@media ${device.tablet} {
		font-size: 25px;
		line-height: 30px;
		margin-bottom: 120px;
		margin-top: 170px;
	}
`;

export const ContenedorDeTexto = styled.div`
	display: flex;
	justify-content: center;

	color: ${(props) => props.theme.colors.primary};
	font-family: 'Kallisto Bold';
	font-style: normal;

	@media ${device.mobileXS} {
	}
	@media ${device.tablet} {
	}
`;
